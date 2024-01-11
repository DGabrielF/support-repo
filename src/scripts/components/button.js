export function confirmButton ({text, functionOnActivation}) {
  const button = document.createElement("button");
  button.textContent = text;
  if (functionOnActivation) {
    button.addEventListener("click", () => functionOnActivation());
  }
  button.classList.add("confirm");
  return button;
}

export function cancelButton ({text, functionOnActivation}) {
  const button = document.createElement("button");
  button.textContent = text;
  if (functionOnActivation) {
    button.addEventListener("click", () => functionOnActivation());
  }
  button.classList.add("cancel");
  return button;
}