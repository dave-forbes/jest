export function caesarCipher(string, shift) {
  let encodedStringArray = [];
  string.split("").forEach((element) => {
    if (element.match(/\w/) && !element.match(/\d/)) {
      const currentCharCode = element.charCodeAt(0);
      let newCharCode = currentCharCode + shift;
      if (!checkUpperCase(element)) {
        if (newCharCode > 122) newCharCode = 96 + (newCharCode - 122);
      } else {
        if (newCharCode > 90) newCharCode = 64 + (newCharCode - 90);
      }
      encodedStringArray.push(String.fromCharCode(newCharCode));
    } else {
      encodedStringArray.push(element);
    }
  });

  return encodedStringArray.join("");
}

function checkUpperCase(letter) {
  return letter == letter.toUpperCase() ? true : false;
}
