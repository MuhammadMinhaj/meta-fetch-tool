export const splitCamelCaseString = (str) => {
  // Type validation
  if (typeof str === 'undefined' || typeof str !== 'string') {
    return null
  }
  // Using regex to parse splited camel case string
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase()
  })
}
