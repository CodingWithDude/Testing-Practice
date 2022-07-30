function caesarCipherEncrypt(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let accumulator = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();
    const isALetter = alphabet.includes(char);
    if (isALetter === false) {
      accumulator += char;
    } else {
      const characterIndex = alphabet.findIndex((c) => c === char);
      // shift index by 13
      accumulator +=
        alphabet[characterIndex + 13] || alphabet[characterIndex - 13];
    }
  }
  return accumulator;
}

export { caesarCipherEncrypt };
