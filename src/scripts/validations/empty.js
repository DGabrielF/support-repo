import { emptyEntry } from "./size.js";

export function emptyValidation(value, text, errors) {
  let errorFree = true; 
  if (emptyEntry(value)) {
    errors.push(`o campo de ${text} não pode estar vazio`);
  }
  return errorFree
}