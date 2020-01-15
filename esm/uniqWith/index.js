export default function uniqWith (array, iteratee) {
  var hash = []
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      const result = typeof iteratee === 'function' ? iteratee(array[i], array[j]) : false
      if (result) {
        ++i
      }
    }
    hash.push(array[i])
  }
  return hash
}
