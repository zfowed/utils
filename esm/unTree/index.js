import { cloneDeep } from '@zfowed/utils/cloneDeep'

function map (result, array, childrensKey) {
  for (const item of array) {
    if (item[childrensKey]) map(result, item[childrensKey], childrensKey)
    delete item[childrensKey]
    result.push(item)
  }
}

function unTree (array, childrensKey) {
  const result = []
  map(result, cloneDeep(array), childrensKey)
  return result
}

export { cloneDeep, unTree }
export default unTree
