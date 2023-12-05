function firstNonRepeatedChar(text) {
  // Create an object to store character frequencies
  const charFrequency = {};

  // Iterate through the characters in the input string
  for (const char of text) {
    // Increment the frequency count for each character
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Iterate through the characters in the input string again
  for (const char of text) {
    // Check if the current character has a frequency of 1 (non-repeated)
    if (charFrequency[char] === 1) {
      // Return the first non-repeated character
      return char;
    }
  }

  // Return null if there is no non-repeated character
  return null;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstNonRepeatedChar(text));
