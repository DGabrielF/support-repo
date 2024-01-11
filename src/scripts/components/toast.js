import { cleanOrCreateBox } from "./elementTools.js";

export function toast({titleText, type, message}) {
  const toast = cleanOrCreateBox("toast");
  toast.classList.add(type);
  
  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = titleText;
  toast.appendChild(title);

  if (typeof message === "string") {
    const span = document.createElement("span");
    span.textContent = message;
    toast.appendChild(span);
  } else if (Array.isArray(message)) {
    const div = document.createElement("div");
    message.forEach(item => {
      const itemMessage = document.createElement("span");
      itemMessage.textContent = item;
      div.appendChild(itemMessage);
    });
    toast.appendChild(div);
  }
  return toast;
}

export function removeToast () {
  const toast = document.querySelector(".toast");
  setTimeout(() => toast.remove(), 3000);
}