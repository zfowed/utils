import { cloneDeep } from '@zfowed/utils/esm/cloneDeep'

function treeBy (array, iteratee, childrensKey = 'children') {
  const tree = cloneDeep(array)
  tree.splice(0, tree.length, ...tree.filter((item, i) => {
    const parent = tree.find(compare => iteratee(item, compare))
    if (parent) {
      if (!Array.isArray(parent[childrensKey])) {
        parent[childrensKey] = []
      }
      parent[childrensKey].push(item)
      return false
    }
    return true
  }))
  return tree
}

export { cloneDeep, treeBy }
export default treeBy
