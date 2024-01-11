import { cleanOrCreateBox } from "./elementTools.js";

export function entry({state, key, text, type, eventType, validationFunction}) {
  const input = document.createElement("input");
  input.id = `${key}-input`;
  input.placeholder = text;
  input.type = type;
  input.addEventListener(eventType, (e) => {
    state.values[key] = e.target.value;
    state.values[`${key}Errors`] = [];
    const keepGoing = validationFunction();
    const div = cleanOrCreateBox("error-box");
    if (!keepGoing) {
      input.classList.add("error")
      state.values[`${key}Errors`].forEach(erro => {
        const span = document.createElement("span");
        span.textContent = erro;
        div.appendChild(span)     
      });
      const reference = document.querySelector(`#${key}-input`)
      reference.insertAdjacentElement("afterend", div);
    } else {
      input.classList.remove("error")
    }
  });
  return input;
}