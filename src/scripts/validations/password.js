export function passwordValidation(password, passwordSettings, errors) {
  let errorFree = true;
  if (emptyEntry(password)) {
    errors.push("A senha não pode estar vazio");
    errorFree = false;
  }
  if (entryLowerThanMinSize(password, passwordSettings.minSize)) {
    errors.push(`A senha deve conter ao menos ${passwordSettings.minSize} letra${passwordSettings.minSize > 1 ? "s" : ""}`);
    errorFree = false;
  }
  if (entryGreaterThanMaxSize(password, passwordSettings.maxSize)) {
    errors.push(`A senha deve conter ao menos ${passwordSettings.maxSize} letras`);
    errorFree = false;
  }
  if (passwordSettings.allowLetters === false) {
    if (!letterExistenceValidation(password, false)) {
      errors.push(`A senha não deve conter letras`);
      errorFree = false;
    }
  }
  if (passwordSettings.allowNumbers === false) {
    if (!numberExistenceValidation(password, false)) {
      errors.push(`A senha não deve conter números`);
      errorFree = false;
    }
  }
  if (passwordSettings.allowSpecialCharacteres === false) {
    if (!specialCharExistenceValidation(password, false)) {
      errors.push(`A senha não deve conter caracteres especiais`);
      errorFree = false;
    }
  }
  if (!letterExistenceValidation(password, passwordSettings.needLetters)) {
    errors.push(`A senha ${(passwordSettings.needLetters ? "deve" : "não deve")} conter letras`);
    errorFree = false;
  }
  if (!numberExistenceValidation(password, passwordSettings.needNumbers)) {
    errors.push(`A senha ${(passwordSettings.needLetters ? "deve" : "não deve")} conter números`);
    errorFree = false;
  }
  if (!specialCharExistenceValidation(password, passwordSettings.needSpecialCharacteres)) {
    errors.push(`A senha ${(passwordSettings.needLetters ? "deve" : "não deve")} conter caracteres especiais`);
    errorFree = false;
  }
  return errorFree;
}