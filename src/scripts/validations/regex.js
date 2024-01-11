export function numberExistenceValidation (value, referenceValue) {
  const numberRegex = /\d/;
  return (numberRegex.test(value) === referenceValue)
}
export function letterExistenceValidation (value, referenceValue) {
  const letterRegex = /[a-zA-Z]/;
  return (letterRegex.test(value) === referenceValue)
}
export function specialCharExistenceValidation (value, referenceValue) {
  const specialRegex = /[^a-zA-Z0-9\s]/;
  return (specialRegex.test(value) === referenceValue)
}
export function emailValidation (value) {
  const letterRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (letterRegex.test(value))
}