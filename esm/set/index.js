
/**
 * 将路径分解成数组
 *
 * @param {string} path
 * @returns
 */
function pathToArray (path) {
  return Array.isArray(path) ? path : path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
}

function set (object, path, value) {
  path = pathToArray(path)
  path.unshift(object)
  path.reduce((data, key, index) => {
    if (index !== path.length - 1) {
      if (!data[key]) { data[key] = {} }
    } else {
      data[key] = value
    }
    return data[key]
  })
}

export { set }
export default set
