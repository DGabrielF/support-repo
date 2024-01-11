import { entry } from "./components/input.js";
import { removeToast, toast } from "./components/toast.js";
import { cleanOrCreateBox } from "./components/elementTools.js"

export const state = {

}

function init () {
  const container = document.querySelector(".container");
  
  const centralContainer = cleanOrCreateBox("central-container");
  container.appendChild(centralContainer); 

  const inputName = entry("name", "Nome", "text", console.log("texto"));
  centralContainer.appendChild(inputName);

  const inputEmail = entry("email", "E-mail", "email", console.log("texto"));
  centralContainer.appendChild(inputEmail);
  
  const fade = cleanOrCreateBox("fade");
  container.appendChild(fade);

  const toastBox = toast({titleText: "erro", type: "error", message: "estamos testando"})
  container.appendChild(toastBox);

  removeToast();
}

init()