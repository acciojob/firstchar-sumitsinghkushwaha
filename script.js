function firstNonRepeatedChar(text) {
  const charFrequency = {};

  for (const char of text) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  for (const char of text) {
    if (charFrequency[char] === 1) {
      return char;
    }
  }

  // Return null if there is no non-repeated character
  return null;
}
