
/**
 * 将路径分解成数组
 *
 * @param {string} path
 * @returns
 */
function pathToArray (path) {
  return Array.isArray(path) ? path : path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
}

export default function get (object, path, defaultValue) {
  path = pathToArray(path)
  path.unshift(object)
  return path.reduce((data, key, index) => {
    if (index !== path.length - 1) {
      return data[key] || {}
    }
    return typeof data[key] !== 'undefined' ? data[key] : defaultValue
  })
}
