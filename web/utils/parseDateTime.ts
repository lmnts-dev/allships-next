/**
 *
 * @name parseDateTime
 * @description Parse a ISO date string.
 * @param {string} isoDate : ISO date string e.g. `2020-06-08T22:05:08.000Z`
 * @returns {string} `MM-DD-YYYY @ HH:MM`
 *
 */
export const parseDateTime = (isoDate: string) => {
  let dateObject = new Date(isoDate);
  let day = dateObject.getDay();
  let month = dateObject.getMonth();
  let year = dateObject.getFullYear();
  // let hour =
  //   dateObject.getHours() > 12
  //     ? dateObject.getHours() - 12
  //     : dateObject.getHours();
  // let minutes =
  //   dateObject.getMinutes() < 10
  //     ? "0" + dateObject.getMinutes()
  //     : dateObject.getMinutes();
  // let period = dateObject.getHours() >= 12 ? "PM" : "AM";
  // let timeString = hour !== 0 ? `@ ${hour}:${minutes} ${period}` : "";

  return `${month}/${day}/${year}`;
};
