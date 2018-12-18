import uniqWith from '@zfowed/utils/dist/uniqWith'

export default function uniqBy (array, iteratee) {
  return uniqWith(array, function (a, b) {
    const aKey = typeof iteratee === 'function' ? iteratee(a) : a[iteratee]
    const bKey = typeof iteratee === 'function' ? iteratee(b) : b[iteratee]
    return aKey === bKey
  })
}
