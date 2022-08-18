import { splitCamelCaseString } from './splitCamelCaseString'

export const objectToArrayOfObject = (obj) => {
  // Type validation
  if (typeof obj === 'undefined' || typeof obj !== 'object') {
    return null
  }
  // Process
  const arrayEntries = Object.entries(obj)
  if (arrayEntries.length === 0) {
    return null
  }
  const arrayOfObj = []

  // Create array of object
  arrayEntries.forEach((arrItem) => {
    arrayOfObj.push({
      name: splitCamelCaseString(arrItem[0]),
      value: arrItem[1],
    })
  })

  return arrayOfObj
}
