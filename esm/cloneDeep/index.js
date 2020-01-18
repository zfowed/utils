
/**
 * 检查是否对象
 *
 * @param {*} obj
 * @returns
 */
function isObj (obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}

function cloneDeep (obj, hash = new WeakMap()) {
  let cloneObj
  const Constructor = obj.constructor
  switch (Constructor) {
    case RegExp:
      cloneObj = new Constructor(obj)
      break
    case Date:
      cloneObj = new Constructor(obj.getTime())
      break
    default:
      if (hash.has(obj)) return hash.get(obj)
      cloneObj = new Constructor()
      hash.set(obj, cloneObj)
  }
  for (const key in obj) {
    cloneObj[key] = isObj(obj[key]) ? cloneDeep(obj[key], hash) : obj[key]
  }
  return cloneObj
}

export { cloneDeep }
export default cloneDeep
