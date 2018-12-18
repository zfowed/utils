import uniqWith from '@zfowed/utils/dist/uniqWith'

export default function uniq (array, iteratee) {
  return uniqWith(array, function (a, b) {
    return a === b
  })
}
