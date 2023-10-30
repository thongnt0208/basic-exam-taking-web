import { doQuizTimeLimit } from "../const/time";


/**
 * Convert minutes to seconds.
 *
 * @param {number} minutes - The number of minutes to convert.
 * @returns {number} The equivalent time in seconds.
 *
 * @example
 * const seconds = MinutesToSeconds(5);
 * console.log(seconds);
 *
 * @description This function converts a given number of minutes to seconds by multiplying it by 60.
 * @version 1.0.0
 * @author ThongNT
 */


export function MinutesToSeconds(minutes) {
  return Math.floor(minutes * 60);
}

/**
 * Convert seconds to minutes.
 *
 * @param {number} seconds - The number of seconds to convert.
 * @returns {number} The equivalent time in minutes.
 *
 * @example
 * const minutes = SecondsToMinutes(300);
 * console.log(minutes);
 *
 * @description This function converts a given number of seconds to minutes by dividing it by 60.
 * @version 1.0.0
 * @author ThongNT
 */

export function SecondsToMinutes(seconds) {
  return Math.floor(seconds / 60);
}

/**
 * Sets the countdown time in seconds.
 *
 * @description This function calculates the countdown time in seconds based on the 'doQuizTimeLimit' variable and stores it in local storage.
 * @version 1.0.1
 * @author ThongNT
 */
export function setCountdownTime() {
    localStorage.setItem(
      "countdownTime",
      MinutesToSeconds(doQuizTimeLimit).toString()
    );
  
}

/**
 * Removes the countdown time from local storage.
 *
 * @description This function removes the countdown time from local storage, if it exists.
 * @version 1.0.0
 * @author ThongNT
 */
export function removeCountdownTime() {
  localStorage.removeItem("countdownTime");
}
