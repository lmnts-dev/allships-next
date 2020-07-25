/**
 *
 * @name parseDateTime
 * @description Parse a ISO date string or 'YYYY-MM-DD'
 * @param {string} isoDate : ISO date string e.g. `2020-06-08T22:05:08.000Z` or 'YYYY-MM-DD'
 * @returns {string} `MM/DD/YYYY @ HH:MM`
 *
 */
export const parseDateTime = (isoDate: string) => {
  let err =
    "🚫 Date is in incorrect format. Make sure to supply a ISO date string, f.e. '2020-06-08T22:05:08.000Z.' or 'YYYY-MM-DD'";

  if (isoDate.includes("T")) {
    console.log("✅ Date in ISO correct format");

    let splitIsoDate = isoDate.split("T");

    // Dates
    let rawDate = splitIsoDate[0];
    let splitRawDate = rawDate.split("-");
    let year = splitRawDate[0];
    let month = splitRawDate[1];
    let day = splitRawDate[2];

    // Times
    let rawTime = splitIsoDate[1];
    let splitRawTime = rawTime.split(".");
    let splitRawTimeSlots = splitRawTime[0].split(":");
    let rawHour = parseInt(splitRawTimeSlots[0]);
    let hour = rawHour > 12 ? rawHour - 12 : rawHour;
    let minutes = parseInt(splitRawTimeSlots[1]);
    let period = rawHour >= 12 ? "PM" : "AM";

    let timeString = hour !== 0 ? `@ ${hour}:${minutes} ${period}` : "";

    // DEBUGGING
    // console.log(isoDate);
    // console.log(splitIsoDate);
    // console.log("rawDate:", rawDate);
    // console.log("splitRawDate:", splitRawDate);
    // console.log("rawTime:", rawTime);
    // console.log("splitRawTimeSlots:", splitRawTimeSlots);
    // console.log(`${month}/${day}/${year} ${timeString}`);

    return `${month}/${day}/${year} ${timeString}`;
  } else {
    if (isoDate.includes("-")) {
      if (isoDate.split("-").length === 3) {
        console.log(
          "✅ Date in fallback YYYY-MM-DD correct format",
          "✅ Supplied: " + isoDate
        );

        let splitDateSlots = isoDate.split("-");
        let year = splitDateSlots[0];
        let month = splitDateSlots[1];
        let day = splitDateSlots[2];

        return `${month}/${day}/${year}`;
      } else {
        console.log(err, "🚫 Supplied: " + isoDate);
        return isoDate;
      }
    } else {
      console.log(err, "🚫 Supplied: " + isoDate);
      return isoDate;
    }
  }
};
