// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  //   let count = 0;
  //   let startIndex = (week - 1) * 7;
  //   let endIndex = week * 7;

  //   for (let index = startIndex; index < endIndex; index--) {
  //     count += birdsPerDay[index];
  //   }
  //   return count;

  return birdsPerDay
    .slice((week - 1) * 7, week * 7)
    .reduce((acc, curr) => acc + curr, 0);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  /*
  Another way:
  let newBirds = [...birdsPerDay];
  for (let i = 0; i < newBirds.length; i += 2) {
    newBirds[i]++;
  }
  return newBirds;

  To work on exercism: 
  for (let index = 0; index < birdsPerDay.length; index+=2) {
        birdsPerDay[index]++
  }
  return birdsPerDay;
  */

  return birdsPerDay.map((bird, index) => (index % 2 === 0 ? bird + 1 : bird));
}
