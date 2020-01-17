function groupBy (collection, iteratee) {
  const group = {}
  for (let index = 0; index < collection.length; index++) {
    const item = collection[index]
    const key = typeof iteratee === 'function' ? iteratee(item, index) : item[iteratee]
    if (!group[key]) group[key] = []
    group[key].push(item)
  }
  return group
}

export { groupBy }
export default groupBy
