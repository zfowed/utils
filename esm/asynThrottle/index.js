function asynThrottle (func, delay, isEnsure) {
  delay = delay || 0
  isEnsure = !!isEnsure

  let inCall = false

  let waitCall = null

  const setWaitCall = function (self, args) {
    if (!isEnsure) return
    if (args) {
      waitCall = {
        self,
        args
      }
    } else {
      waitCall = null
    }
  }

  const fnApply = function (self, args) {
    return func.apply(self, args)
  }

  let setT = null

  const setTFn = function () {
    if (waitCall) {
      const {
        self,
        args
      } = waitCall
      setWaitCall()
      fnApply(self, args)
    }

    inCall = false
    setT = null
  }

  const next = function () {
    if (setT) clearTimeout(setT)
    setT = setTimeout(setTFn, delay)
  }

  return function () {
    const args = [...arguments, next]

    if (inCall) {
      return setWaitCall(this, args)
    }

    inCall = true

    return fnApply(this, args)
  }
}

export { asynThrottle }
export default asynThrottle
