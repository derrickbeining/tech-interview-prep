export const hasNoRepeatChars = str => {
  if (typeof str !== 'string') throw new TypeError('strings only please');
  if (!str.length) return true;
  for (let i = 0; i < str.length - 1; i++) {
    const currChar = str[i].toLowerCase();
    for (let j = i + 1; j < str.length; j++) {
      const laterChar = str[j].toLowerCase();
      if (currChar === laterChar) return false;
    }
  }
  return true;
}

export const reverse = str => {
  const reversed = [];
  for (let i = str.length - 1 ; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join('');
}
