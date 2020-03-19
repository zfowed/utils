
function flow (...funcs) {
  return function () {
    let args = arguments
    for (const func of funcs) {
      if (typeof func === 'function') {
        args = [func(...args)]
      }
    }
    return args[0]
  }
}

export default flow
