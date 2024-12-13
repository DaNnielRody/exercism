/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(name: string = "you"): string {
  // ^                 ^   ^ this is called a return type; it's the type of the
  // ^                 ^     value that is returned from this function
  // ^                 ^
  // ^                 parameters go here
  // ^
  // allows the tests to import this function and call it
  // <-- Your code goes here. You may remove all the commentary in this file.

  return `One for ${name}, one for me.`;
}

export function twoFer2(name?: string): string {
  // ^                 ^   ^ this is called a return type; it's the type of the
  // ^                 ^     value that is returned from this function
  // ^                 ^
  // ^                 parameters go here
  // ^
  // allows the tests to import this function and call it
  // <-- Your code goes here. You may remove all the commentary in this file.

  if (!name) {
    return "One for you, one for me";
  }

  return `One for ${name}, one for me.`;
}

export function twoFer3(name: string = "you"): string {
  // ^                 ^   ^ this is called a return type; it's the type of the
  // ^                 ^     value that is returned from this function
  // ^                 ^
  // ^                 parameters go here
  // ^
  // allows the tests to import this function and call it
  // <-- Your code goes here. You may remove all the commentary in this file.
  //
  // Esse operador é utilizado quando o valor da esquerda é undefined ou nulo, então o da direita é preenchido:
  return `One for ${name ?? "you"}, one for me.`;
}
