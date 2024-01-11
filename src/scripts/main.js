import { entry } from "./components/input.js";
import { removeToast, toast } from "./components/toast.js";
import { cleanOrCreateBox } from "./components/elementTools.js"
import { nameValidation } from "./validations/name.js";
import { emailValidation } from "./validations/email.js";

export const state = {
  values: {
    name: null,
    nameErrors: [],
    email: null,
    emailErrors: [],
  },
  settings: {
    name: {
      minSize: 2,
      maxSize: 18,
      allowNumbers: false,
      allowLetters: true,
      allowSpecialCharacteres: false,
      needNumbers: false,
      needLetters: true,
      needSpecialCharacteres: false,
    },
    password: {
      minSize: 6,
      maxSize: 12,
      allowNumbers: true,
      allowLetters: true,
      allowSpecialCharacteres: true,
      needNumbers: true,
      needLetters: true,
      needSpecialCharacteres: true,
    },
  },
}

function init () {
  const container = document.querySelector(".container");
  
  const centralContainer = cleanOrCreateBox("central-container");
  container.appendChild(centralContainer); 

  centralContainer.appendChild(
    entry({
      state: state,
      key: "name",
      text: "seu nome",
      type: "text",
      eventType: "input",
      validationFunction: () => nameValidation(state.values.name, state.settings.name, state.values.nameErrors),
    })
  );

  centralContainer.appendChild(entry({
    state: state,
    key: "email",
    text: "seu e-mail",
    type: "email",
    eventType: "input",
    validationFunction: () => emailValidation(state.values.email, state.values.emailErrors),
  }));

  const buttonArea = cleanOrCreateBox("buttons-area");

  const confirmButton = document.createElement("button");
  confirmButton.textContent = "confirmar";
  buttonArea.appendChild(confirmButton);

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "cancelar";
  buttonArea.appendChild(cancelButton);

  centralContainer.appendChild(buttonArea);

  const fade = cleanOrCreateBox("fade");
  container.appendChild(fade);

  const toastBox = toast({titleText: "erro", type: "error", message: "estamos testando"})
  container.appendChild(toastBox);

  removeToast();
}

init()