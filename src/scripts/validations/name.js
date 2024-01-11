export function nameValidation(name, nameSettings, arrayOfErrors) {
  let errorFree = true;
  if (emptyEntry(name)) {
    arrayOfErrors.push("O nome não pode estar vazio");
    errorFree = false;
  }
  if (entryLowerThanMinSize(name, nameSettings.minSize)) {
    arrayOfErrors.push(`O nome deve conter ao menos ${nameSettings.minSize} letra${nameSettings.minSize > 1 ? "s" : ""}`);
    errorFree = false;
  }
  if (entryGreaterThanMaxSize(name, nameSettings.maxSize)) {
    arrayOfErrors.push(`O nome deve conter ao menos ${nameSettings.maxSize} letras`);
    errorFree = false;
  }
  if (nameSettings.allowLetters === false) {
    if (!letterExistenceValidation(name, false)) {
      arrayOfErrors.push(`O nome não deve conter letras`);
      errorFree = false;
    }
  }
  if (nameSettings.allowNumbers === false) {
    if (!numberExistenceValidation(name, false)) {
      arrayOfErrors.push(`O nome não deve conter números`);
      errorFree = false;
    }
  }
  if (nameSettings.allowSpecialCharacteres === false) {
    if (!specialCharExistenceValidation(name, false)) {
      arrayOfErrors.push(`O nome não deve conter caracteres especiais`);
      errorFree = false;
    }
  }
  if (!letterExistenceValidation(name, nameSettings.needLetters)) {
    arrayOfErrors.push(`O nome ${(nameSettings.needLetters ? "deve" : "não deve")} conter letras`);
    errorFree = false;
  }
  if (!numberExistenceValidation(name, nameSettings.needNumbers)) {
    arrayOfErrors.push(`O nome ${(nameSettings.needLetters ? "deve" : "não deve")} conter números`);
    errorFree = false;
  }
  if (!specialCharExistenceValidation(name, nameSettings.needSpecialCharacteres)) {
    arrayOfErrors.push(`O nome ${(nameSettings.needLetters ? "deve" : "não deve")} conter caracteres especiais`);
    errorFree = false;
  }
  return errorFree;
}