import uniqWith from '@zfowed/utils/esm/uniqWith'

export default function uniq (array, iteratee) {
  return uniqWith(array, function (a, b) {
    return a === b
  })
}
