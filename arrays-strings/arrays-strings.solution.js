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

export const isPermutation = (str1, str2) => {
  // if strings have diff lengths, they can't be permutations
  if (str1.length !== str2.length) return false;
  // loop through first string
  for (let i = 0; i < str1.length; i++) {
    // for each letter in first string, loop through second string
    for (let j = 0; j < str2.length; j++) {
      // stop inner loop and increment outer loop whenever a match is found
      if (str1[i] === str2[j]) break;
      // if you reach the last letter of inner loop without a match,
      // it's not a permutation
      if ((j === str2.length - 1) && str1[i] !== str2[j]) {
        return false;
      }
    }
  }
  // if every letter in outer loop finds a match, must be a permutation
  return true;
}

export const reverse = str => {
  const reversed = [];
  for (let i = str.length - 1 ; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join('');
}
