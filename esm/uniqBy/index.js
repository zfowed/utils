import { uniqWith } from '@zfowed/utils/uniqWith'

function uniqBy (array, iteratee) {
  return uniqWith(array, function (a, b) {
    const aKey = typeof iteratee === 'function' ? iteratee(a) : a[iteratee]
    const bKey = typeof iteratee === 'function' ? iteratee(b) : b[iteratee]
    return aKey === bKey
  })
}

export { uniqWith, uniqBy }
export default uniqBy
