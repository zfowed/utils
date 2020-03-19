import { uniqWith } from '@zfowed/utils/uniqWith'

function uniq (array, iteratee) {
  return uniqWith(array, function (a, b) {
    return a === b
  })
}

export { uniqWith, uniq }
export default uniq
