# FileReader 文件选择器

## NPM安装

```shell
npm install @zfowed/utils -S
```

## 方法

`new FileReader(options)`

options:

| Key | Type | Optional | Default value | Description |
| - | - | - | - | - |
| `limitExt` | `String` | `true` |  | 限制文件的后缀名,逗号分开 |
| `accept` | `String` | `true` |  | 本地文件选择器只能显示的文件类型（如果设置了limitExt，该值无效） |
| `multiple` | `Boolean` | `true` | `false` | 本地文件选择器是否允许多选文件 |
| `maxSize` | `Number` | `true` |  | 文件大小的最大限制（0 为不限制） |
| `minSize` | `Number` | `true` |  | 文件大小的最小限制（0 为不限制） |
| `parseImgBase64` | `String` | `true` | `false` | 择图片文件时是否自动解析Base64值 |
| `forcedChange` | `String` | `true` | `true` | 选择文件后是否强制刷新 `input` (强制刷新 `input` 可以选择同一个文件) |
| `onChange` | `Function` | `true` |  | 监听选择文件事件 |
| `onError` | `Function` | `true` |  | 监听选择文件出错事件 |


## 基本用法

```javascript
import cookie from '@zfowed/utils/dist/cookie'
```

```javascript
var fileSelection = new FileSelection({
  limitExt: '.jpg,.png,.gif', // 限制文件的后缀名,逗号分开
  accept: '.jpg,.png,.gif', // 本地文件选择器只能显示的文件类型（如果设置了limitExt，该值无效）
  multiple: true, // 本地文件选择器是否允许多选文件
  maxSize: 0, // 文件大小的最大限制
  minSize: 0, // 文件大小的最小限制
  parseImgBase64: true, // 择图片文件时是否自动解析Base64值
  forcedChange: true, // 选择文件后是否强制刷新 input
  onChange: function (fileInfoList) { // 监听选择文件事件
    // fileInfoList: 当前选择的解析过的文件信息
  },
  onError: function (error) { // 监听选择文件出错事件
    // error.type: 错误类型，支持 limitExt, maxSize, minSize, parseImgBase64
    // error.fileInfo: 出错的文件信息
  }
})

/** 获取当前所有选择的文件信息数据 */
fileSelection._values

/** 打开选择文件窗口；onChange 选择文件回调；onError 选择文件出错回调 */
fileSelection.select(function onChange (fileInfoList) {
  // fileInfoList: 当前选择的解析过的文件信息
}, function onError (error) { // 监听选择文件出错事件
  // error.type: 错误类型，支持 limitExt, maxSize, minSize, parseImgBase64
  // error.fileInfo: 出错的文件信息
})

/** 打开添加文件窗口；onChange 选择文件回调；onError 选择文件出错回调 */
fileSelection.push(function onChange (fileInfoList) {
  // fileInfoList: 当前选择的解析过的文件信息
}, function onError (error) { // 监听选择文件出错事件
  // error.type: 错误类型，支持 limitExt, maxSize, minSize, parseImgBase64
  // error.fileInfo: 出错的文件信息
})

/** 获取当前所有选择的文件对象 */
fileSelection.files()

/** 根据 fileInfo 中id删除已经选择的文件信息 */
fileSelection.remove(id)

/** 摧毁文件选择器 */
fileSelection.destroy()
fileSelection = null
```
