export function entry({state, key, text, type, validationFunction}) {
  const input = document.createElement("input");
  input.textContent = text;
  input.type = type;
  input.addEventListener("input", (e) => {
    state.values[key] = e.target.value;
    const errors = validationFunction();
    if (errors.length > 0) {
      const div = document.createElement("div");
      div.classList.add("error-box");
      input.insertAdjacentElement("afterend", div);
      errors.forEach(erro => {
        const span = createElement("span");
        span.textContent = erro;       
      });
    }
  })
  return input;
}