function generatePassword(length, levelHardPass, count = 1) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let passwords = [];
  const digits = '0123456789';
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';

  for (let j = 0; j < count; j++) {
    let newPassword = '';

    for (let i = 0; i < length; i++) {
      if (levelHardPass === 'easy') {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const randomAlphabet = alphabet[randomIndex];
        newPassword += randomAlphabet;
      } else if (levelHardPass === 'medium') {
        const combinedChars = alphabet + digits;
        const randomIndex = Math.floor(Math.random() * combinedChars.length);
        const randomChar = combinedChars[randomIndex];
        newPassword += randomChar;
      } else if (levelHardPass === 'hard') {
        const combinedChars = alphabet + digits + symbols;
        const randomIndex = Math.floor(Math.random() * combinedChars.length);
        const randomChar = combinedChars[randomIndex];
        newPassword += randomChar;
      }
    }

    passwords.push(newPassword);
  }

  if (count === 1) {
    return passwords[0];
  }

  return passwords;
}