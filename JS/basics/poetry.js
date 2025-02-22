// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
    return line[0];
  }
  
  /**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
    // The charAt() method returns the character at a specified index (position) in a string.
    // The index of the first character is 0, the second is 1, and so on.
    // Since then, we can use the slice method to get the rest of the word and convert it to lowercase.
    // Slice method works like this: slice(start, end)
    // The start parameter is the index of the first character to include in the returned string.
    // The end parameter is the index of the first character to exclude from the returned string.
    // Since we want to exclude the first character, we can start from index 1.
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
    const newLine = line.trim();
    // Javascript array is an object, so we can access the last element using the length property not only by the index -1
    // For this, you can use the at method: newLine.at(-1);
    return newLine[newLine.length -1];
  }

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  const newWord = frontDoorPassword(word);
  return `${newWord}, please`;
}