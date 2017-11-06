const interleave = (arr1, arr2) => {
  const merged = [];
  const longer = arr1.length > arr2.length
    ? arr1
    : arr2;
  for (let i = 0; i < longer.length; i++) {
    if (arr1[i]) merged.push(arr1[i]);
    if (arr2[i]) merged.push(arr2[i]);
    }
  return merged;
}

export const compress = str => {
  const charsFound = [];
  const charCounts = [];
  let currIdx = 0;
  for (let i = 0; i < str.length; i++) {
    if (!charsFound[currIdx]) {
      charsFound[currIdx] = str[i];
      charCounts[currIdx] = 1;
    } else if (charsFound[currIdx] === str[i]) {
      charCounts[currIdx]++;
    } else {
      currIdx++;
      charsFound[currIdx] = str[i];
      charCounts[currIdx] = 1;
    }
  }
  const compressed = interleave(charsFound, charCounts).join('');
  if (compressed.length < str.length) return compressed;
  else return str;
  }

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

      // if you reach the last letter of inner loop without a match, it's not a
      // permutation
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
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join('');
}

export const rotateMatrix90 = matrix => {
  // last idx for any row/col:
  const ultima = matrix.length - 1;
  // num concentric squares to rotate:
  const totalConcentricSquares = Math.floor(matrix.length / 2);
  let numSquaresRotated = 0;
    while (numSquaresRotated < totalConcentricSquares) {
      // idx to access top or left side:
      const first = numSquaresRotated;
      // idx to access right or bottom side:
      const last = ultima - numSquaresRotated;
        // idx to traverse top or left side:
      for (let firstOffset = first; firstOffset < last; firstOffset++) {
        // idx to traverse right or bottom side:
        const ultimaOffset = ultima - firstOffset;
        // store top:
        let temp = matrix[first][firstOffset];
        // top <-- left
        matrix[first][firstOffset] = matrix[ultimaOffset][first];
        // left <-- bottom
        matrix[ultimaOffset][first] = matrix[last][ultimaOffset];
        // bottom <-- right
        matrix[last][ultimaOffset] = matrix[firstOffset][last];
        // right <-- top
        matrix[firstOffset][last] = temp;
      }
      numSquaresRotated++;
    }
  return matrix;
}

export const urlEncodeSpaces = str => {
  const stringBuffer = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') stringBuffer.push('%20');
    else stringBuffer.push(str[i]);
    }
  return stringBuffer.join('');
}
