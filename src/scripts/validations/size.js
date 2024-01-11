export function emptyEntry (value) {
  return (value?value.length === 0:true)
}
export function entryLowerThanMinSize (value, minValue) {
  return (value?value.length < minValue:true)
}
export function entryGreaterThanMaxSize (value, maxValue) {
  return (value?value.length > maxValue:true)
}