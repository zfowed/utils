
function memoize (func, resolver) {
  function result () {
    const args = arguments
    const key = resolver ? resolver.apply(this, args) : args[0]
    const cache = result.cache

    if (!cache.has(key)) {
      const res = func.apply(this, args)
      cache.set(key, res)
    }

    return cache.get(key)
  }

  if (typeof func !== 'function' || (resolver && typeof resolver !== 'function')) {
    throw new Event('Expected a function')
  }

  result.cache = new Map()

  return result
}

export default memoize
