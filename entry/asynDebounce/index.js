export default function (func) {
  let status = 'idle'
  const next = function () {
    if (status !== 'idle') status = 'idle'
    if (status === 'waiting') {
      return processFunc()
    }
  }
  const processFunc = function () {
    if (status === 'waiting') return
    if (status === 'running') {
      status = 'waiting'
      return
    }
    if (status === 'idle') status = 'running'
    func.apply(this, [...arguments, next])
  }
  return processFunc
}