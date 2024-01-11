import { emptyEntry, entryGreaterThanMaxSize, entryLowerThanMinSize } from "./size.js";
import { letterExistenceValidation, numberExistenceValidation, specialCharExistenceValidation } from "./regex.js";

export function nameValidation(name, nameSettings, nameErrors) {
  let errorFree = true;
  if (emptyEntry(name)) {
    nameErrors.push("O nome não pode estar vazio");
    errorFree = false;
  } 
  if (entryLowerThanMinSize(name, nameSettings.minSize)) {
    nameErrors.push(`O nome deve conter ao menos ${nameSettings.minSize} letra${nameSettings.minSize > 1 ? "s" : ""}`);
    errorFree = false;
  }
  if (entryGreaterThanMaxSize(name, nameSettings.maxSize)) {
    nameErrors.push(`O nome deve conter no máximo ${nameSettings.maxSize} letras`);
    errorFree = false;
  }
  if (nameSettings.allowLetters === false) {
    if (!letterExistenceValidation(name, false)) {
      nameErrors.push(`O nome não deve conter letras`);
      errorFree = false;
    }
  } 
  if (nameSettings.allowNumbers === false) {
    if (!numberExistenceValidation(name, false)) {
      nameErrors.push(`O nome não deve conter números`);
      errorFree = false;
    }
  }
  if (nameSettings.allowSpecialCharacteres === false) {
    if (!specialCharExistenceValidation(name, false)) {
      nameErrors.push(`O nome não deve conter caracteres especiais`);
      errorFree = false;
    }
  }
  if (!letterExistenceValidation(name, nameSettings.needLetters)) {
    nameErrors.push(`O nome ${(nameSettings.needLetters ? "deve" : "não deve")} conter letras`);
    errorFree = false;
  }
  if (!numberExistenceValidation(name, nameSettings.needNumbers)) {
    nameErrors.push(`O nome ${(nameSettings.needLetters ? "deve" : "não deve")} conter números`);
    errorFree = false;
  }
  if (!specialCharExistenceValidation(name, nameSettings.needSpecialCharacteres)) {
    nameErrors.push(`O nome ${(nameSettings.needLetters ? "deve" : "não deve")} conter caracteres especiais`);
    errorFree = false;
  }
  return errorFree;
}