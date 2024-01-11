import { entry } from "./components/input.js";
import { removeToast, toast } from "./components/toast.js";
import { cleanOrCreateBox } from "./components/elementTools.js"
import { nameValidation } from "./validations/name.js";
import { emailValidation } from "./validations/email.js";
import { cancelButton, confirmButton } from "./components/button.js";

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

  centralContainer.appendChild(entry({state: state, key: "name", text: "seu nome", type: "text", eventType: "input", validationFunction: () => nameValidation(state.values.name, state.settings.name, state.values.nameErrors)}));

  centralContainer.appendChild(entry({state: state, key: "email", text: "seu e-mail", type: "email",eventType: "input", validationFunction: () => emailValidation(state.values.email, state.values.emailErrors)}));

  const buttonArea = cleanOrCreateBox("buttons-area");

  buttonArea.appendChild(confirmButton({text: "confirmar", functionOnActivation: () => console.log("evento acionado")}));

  buttonArea.appendChild(cancelButton({text: "cancelar", functionOnActivation: () => console.log("evento acionado")}));

  centralContainer.appendChild(buttonArea);

  container.appendChild(cleanOrCreateBox("fade"));

  container.appendChild(toast({titleText: "erro", type: "error", message: "estamos testando"}));

  removeToast();
}

init()