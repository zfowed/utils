/* global FileReader */

/**
 * 文件选择器
 *
 * 例子：
 * var fileSelection = new FileSelection({
 *     limitExt: '.jpg,.png,.gif', // 限制文件的后缀名,逗号分开，例子：".jpg,.png,.gif"
 *     accept: '.jpg,.png,.gif', // 本地文件选择器只能显示的文件类型（如果设置了limitExt，该值无效）
 *     multiple: true, // 本地文件选择器是否允许多选文件
 *     maxSize: 0, // 文件大小的最大限制
 *     minSize: 0, // 文件大小的最小限制
 *     base64: true, // 选择文件时是否自动解析Base64值
 *     parseImgBase64: true, // 选择图片文件时是否自动解析Base64值
 *     forcedChange: true, // 选择文件后是否强制刷新El(强制刷新El可以选择同一个文件)
 *     onChange: function (fileInfoList) { // 监听选择文件事件
 *         // fileInfoList: 当前选择的解析过的文件信息
 *     },
 *     onError: function (error) { // 监听选择文件出错事件
 *         // error.type: 错误类型，支持 limitExt, maxSize, minSize, parseImgBase64
 *         // error.fileInfo: 出错的文件信息
 *     }
 * })
 *
 * fileSelection._values                      // 获取当前所有选择的文件信息数据
 * fileSelection.select(onChange, onError)    // 打开选择文件窗口；onChange 选择文件回调；onError 选择文件出错回调
 * fileSelection.push(onChange, onError)      // 打开添加文件窗口；onChange 选择文件回调；onError 选择文件出错回调
 * fileSelection.files()                      // 获取当前所有选择的文件对象
 * fileSelection.remove(id)                   // 根据 fileInfo 中id删除已经选择的文件信息
 * fileSelection.destroy()                    // 摧毁文件选择器
 *
 * @class FileSelection
 */
class FileSelection {
  constructor (options) {
    this.options = this._getOptions(options)
    this._inputFileDiv = null
    this._inputFile = null
    this._action = 'select'
    this._values = []

    const sUserAgent = navigator.userAgent.toLowerCase()
    const bIsIpad = String(sUserAgent.match(/ipad/i)) === 'ipad'
    const bIsIphoneOs = String(sUserAgent.match(/iphone os/i)) === 'iphone os'
    const bIsMidp = String(sUserAgent.match(/midp/i)) === 'midp'
    const bIsUc7 = String(sUserAgent.match(/rv:1.2.3.4/i)) === 'rv:1.2.3.4'
    const bIsUc = String(sUserAgent.match(/ucweb/i)) === 'ucweb'
    const bIsAndroid = String(sUserAgent.match(/android/i)) === 'android'
    const bIsCE = String(sUserAgent.match(/windows ce/i)) === 'windows ce'
    const bIsWM = String(sUserAgent.match(/windows mobile/i)) === 'windows mobile'
    this._isPC = !bIsIpad && !bIsIphoneOs && !bIsMidp && !bIsUc7 && !bIsUc && !bIsAndroid && !bIsCE && !bIsWM

    this._createInputFileDiv()
    this._createInputFile()
  }

  /**
   * 获取解析后的选项参数
   *
   * @param {object} options 选项参数
   * @returns {object} 选项
   * @memberof FileSelection
   */
  _getOptions (options) {
    if (typeof options !== 'object') options = {}
    const result = {}
    // this._isPC
    result['multiple'] = !!options.multiple
    result['limitExt'] = typeof options.limitExt === 'string' ? options.limitExt.split(',') : undefined
    result['accept'] = typeof options.accept === 'string' ? options.accept : undefined
    result['maxSize'] = typeof options.maxSize === 'number' ? options.maxSize : undefined
    result['minSize'] = typeof options.minSize === 'number' ? options.minSize : undefined
    result['base64'] = !!options.base64
    result['parseImgBase64'] = !!options.parseImgBase64
    result['forcedChange'] = typeof options.forcedChange === 'undefined' ? true : !!options.forcedChange
    result['onChange'] = typeof options.onChange === 'function' ? options.onChange : undefined
    result['onError'] = typeof options.onError === 'function' ? options.onError : undefined
    if (!result['accept'] && this._isPC && result['limitExt']) result['accept'] = result['limitExt'].join(',')
    return result
  }

  /**
   * 创建存放 <input type="file"> 的 <div>
   *
   * @memberof FileSelection
   */
  _createInputFileDiv () {
    // 只创建一次
    if (!FileSelection._inputFileDiv) {
      FileSelection._inputFileDiv = document.createElement('div')
      document.body.appendChild(FileSelection._inputFileDiv)
    }
    this._inputFileDiv = FileSelection._inputFileDiv
  }

  /**
   * 创建 <input type="file">
   *
   * @memberof FileSelection
   */
  _createInputFile () {
    // 如果存在就删除
    if (this._inputFileDiv && this._inputFile) {
      this._inputFileDiv.removeChild(this._inputFile)
    }
    // 添加
    const inputFile = document.createElement('input')
    inputFile.type = 'file'
    inputFile.style.display = 'none'
    inputFile.onchange = this._onInputFileChange.bind(this)
    if (this.options.multiple) inputFile.multiple = 'multiple'
    if (this.options.accept) inputFile.accept = this.options.accept
    this._inputFile = inputFile
    if (this._inputFileDiv) this._inputFileDiv.appendChild(this._inputFile)
  }

  /**
   * 获取一个随机字符串
   *
   * @returns {string} 返回一个随机字符串
   * @memberof FileSelection
   */
  _getRandomId () {
    var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    var result = ''
    for (var i = 0; i < 8; i++) {
      result += str[Math.floor(Math.random() * str.length)]
    }
    return result
  }

  /**
   * 多任务处理
   * 将多个异步任务同时执行，首次遇到错误回调，所有任务结束回调
   *
   * @param {array} tasks 任务列表
   * @param {function} process 处理任务 代送器 process(task, next)
   * @param {function} callback 回调 callback(error, result)
   * @memberof FileSelection
   */
  _multitaskingRun (tasks, process, callback) {
    const tasksLen = tasks.length
    let runNumber = 0
    let resolveResults = []
    let rejectError = null
    const next = function (error, result) {
      if (rejectError) return
      runNumber += 1
      if (error) {
        rejectError = error
      } else {
        resolveResults[this.index] = result
      }
      if (rejectError || runNumber >= tasksLen) {
        return callback(rejectError, resolveResults)
      }
    }
    for (let index = 0; index < tasksLen; index++) {
      const task = tasks[index]
      process(task, next.bind({ task, index }))
    }
  }

  /**
   * 根据 image file 对象获取 base64值
   *
   * @param {file} file 图片文件
   * @param {function} callback 回调 callback(error, base64)
   * @memberof FileSelection
   */
  _getBase64ByImgFile (file, callback) {
    if (typeof FileReader !== 'function') {
      return callback(new Error('FileReader is not a function'))
    }
    const reader = new FileReader()
    reader.onload = function () {
      return callback(null, this.result)
    }
    return reader.readAsDataURL(file)
  }

  /**
   * 解析 file 对象
   *
   * @param {file} file 图片文件
   * @returns {object} 文件信息
   * @memberof FileSelection
   */
  _analysisFileInfo (file) {
    var fileInfo = {}
    fileInfo.id = this._getRandomId()
    fileInfo.path = file.name // 路径
    fileInfo.path.replace(/^(((?:[a-zA-Z]):)?[\\/]?(?:[\s\S]+?[\\/])*)([\s\S]+?(\.[^.]+?)?)$/, function (all, dirname, drive, basename, extname) {
      fileInfo.drive = drive || undefined // 盘符
      fileInfo.dirname = dirname || undefined // 目录名
      fileInfo.basename = basename || undefined // 文件名
      fileInfo.extname = extname || undefined // 后缀
    })
    fileInfo.size = file.size // 大小
    fileInfo.type = file.type // 类型
    fileInfo.lastModified = file.lastModified // 最后更新时间
    fileInfo.lastModifiedDate = file.lastModifiedDate // 最后更新时间
    fileInfo.file = file // 文件对象
    return fileInfo
  }

  /**
   * 选择文件
   *
   * @param {array} files 文件数组
   * @param {function} callback 回调 callback(error, result)
   * @memberof FileSelection
   */
  _onFileChange (files, callback) {
    // 启动多任务队列
    return this._multitaskingRun(files, (file, callback) => {
      const fileInfo = this._analysisFileInfo(file)
      if (this.options.maxSize && this.options.maxSize <= fileInfo.size) {
        const error = new Error('File does not meet the maximum size limit!')
        error.type = 'maxSize'
        error.fileInfo = fileInfo
        return callback(error)
      } else if (this.options.minSize && this.options.minSize >= fileInfo.size) {
        const error = new Error('File does not meet the minimum size limit!')
        error.type = 'maxSize'
        error.fileInfo = fileInfo
        return callback(error)
      } else if (this.options.limitExt && this.options.limitExt.indexOf(fileInfo.extname) < 0) {
        const error = new Error(`The file format must be ${this.options.limitExt.join(', ')} !`)
        error.type = 'limitExt'
        error.fileInfo = fileInfo
        return callback(error)
      }
      if (this.base64 || (this.options.parseImgBase64 && fileInfo.type.indexOf('image') >= 0)) {
        return this._getBase64ByImgFile(file, (error, result) => {
          if (error) {
            error.type = 'parseImgBase64'
            error.fileInfo = fileInfo
            return callback(error)
          }
          fileInfo.base64 = result
          return callback(null, fileInfo)
        })
      }
      return callback(null, fileInfo)
    }, callback)
  }

  /**
   * <input type="file"> 选择事件
   *
   * @memberof FileSelection
   */
  _onInputFileChange () {
    const files = this._inputFile.files
    if (this.options.forcedChange) this._createInputFile()
    // 触发文件选择
    return this._onFileChange(files, (error, cutValue) => {
      if (error) {
        // 触发文件选择错误事件
        this._reject && this._reject(error)
        return this.options.onError && this.options.onError(error)
      }
      if (this._action === 'select') {
        this._values.splice(0, this._values.length, ...cutValue)
      } else if (this._action === 'push') {
        this._values.push(...cutValue)
      }
      // 触发文件选择事件
      this._resolve && this._resolve(this._values)
      return this.options.onChange && this.options.onChange(this._values)
    })
  }

  /**
   * 选择文件
   *
   * @memberof FileSelection
   */
  select (resolve, reject) {
    this._action = 'select'
    this._resolve = resolve
    this._reject = reject
    this._inputFile.click()
  }

  /**
   * 添加文件
   *
   * @memberof FileSelection
   */
  push (resolve, reject) {
    this._action = 'push'
    this._resolve = resolve
    this._reject = reject
    this._inputFile.click()
  }

  /**
   * 删除文件
   *
   * @param {string} id 文件id
   * @memberof FileSelection
   */
  remove (id) {
    for (let i = 0; i < this._values.length; i++) {
      if (this._values[i].id === id) {
        this._values.splice(i, 1)
        break
      }
    }
  }

  /**
   * 获取当前已选择的文件对象
   *
   * @param {string} id 文件id
   * @memberof FileSelection
   */
  files () {
    let files = []
    for (let i = 0; i < this._values.length; i++) {
      files.push(this._values[i].file)
    }
    return files
  }

  /**
   * 摧毁选择器
   *
   * @memberof FileSelection
   */
  destroy () {
    // 如果存在就删除
    if (this._inputFileDiv && this._inputFile) {
      this._inputFileDiv.removeChild(this._inputFile)
    }
  }
}

FileSelection._inputFileDiv = null

export default FileSelection
