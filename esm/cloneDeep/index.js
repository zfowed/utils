
/**
 * 检查是否对象
 *
 * @param {*} obj
 * @returns
 */
function isObject (obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}

function cloneDeep (obj, hash = new WeakMap()) {
  if (!isObject(obj)) return obj
  let cloneObj
  const Constructor = obj.constructor
  switch (Constructor) {
    case RegExp:
      cloneObj = new Constructor(obj)
      break
    case Date:
      cloneObj = new Constructor(obj.getTime())
      break
    case Function:
      cloneObj = obj
      break
    default:
      if (hash.has(obj)) return hash.get(obj)
      cloneObj = new Constructor()
      hash.set(obj, cloneObj)
  }
  for (const key in obj) {
    cloneObj[key] = isObject(obj[key]) ? cloneDeep(obj[key], hash) : obj[key]
  }
  return cloneObj
}

export { cloneDeep }
export default cloneDeep
