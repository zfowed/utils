import { cloneDeep, treeBy } from '@zfowed/utils/esm/treeBy'

function tree (array, akey, bKey, childrensKey) {
  return treeBy(array, (a, b) => a[akey] === b[bKey], childrensKey)
}

export { cloneDeep, treeBy, tree }
export default tree
