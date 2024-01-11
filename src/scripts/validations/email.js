import { emailFormValidation } from "./regex.js";

export function emailValidation(email, emailErrors) {
  let errorFree = true;
  if (!emailFormValidation(email)) {
    emailErrors.push("Formato de e-mail inválido");
    errorFree = false
  }
  return errorFree;
}