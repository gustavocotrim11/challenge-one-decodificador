const inputText = document.querySelector(".input-text");
const message = document.querySelector(".message");
const messageContainer = document.querySelector(".message-container");
const backgroundContainer = document.querySelector(".background-message");

const codeMatrix = [["a", "!sd!"], ["e", "@fg@"], ["i", "#hj#"], ["o", "$kl$"], ["u", "%zx%"]]

function toggleElement(elementToHide, elementToShow) {
  elementToHide.style.display = "none";
  elementToShow.style.display = "block";
}

function btnEncrypt() {
  if (inputText.value.trim() === "") {
    toggleElement(messageContainer, backgroundContainer);
    return;
  }
  const textEncrypted = encrypt(inputText.value)
  message.value = textEncrypted
  toggleElement(backgroundContainer, messageContainer);
}

function encrypt(stringToEncrypt) {
  stringToEncrypt = stringToEncrypt.toLowerCase();

  for (let i = 0; i < codeMatrix.length; i++) {
    if (stringToEncrypt.includes(codeMatrix[i][0])) {
      stringToEncrypt = stringToEncrypt.replaceAll(codeMatrix[i][0], codeMatrix[i][1])
    }
  }

  return stringToEncrypt;
}

function btnDecrypt() {
  if (inputText.value.trim() === "") {
    toggleElement(messageContainer, backgroundContainer);
    return;
  }
  const textDecrypted = decrypt(inputText.value)
  message.value = textDecrypted
  toggleElement(backgroundContainer, messageContainer);
}

function decrypt(stringToDecrypt) {
  stringToDecrypt = stringToDecrypt.toLowerCase();

  for (let i = 0; i < codeMatrix.length; i++) {
    if (stringToDecrypt.includes(codeMatrix[i][1])) {
      stringToDecrypt = stringToDecrypt.replaceAll(codeMatrix[i][1], codeMatrix[i][0])
    }
  }

  return stringToDecrypt;
}

function copyMessage() {
  message.select();
  message.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(message.value);

  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiado: " + message.value;
}

function outFunc() {
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiar para área de transferência";
}