const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(data) {
  if (data == undefined) return 'Unable to determine the time of year!';
  let season = '';
  let month = data.getMonth() + 1;
  let curDate = new Date ();
  if (data.toDateString() === "Thu Jan 01 1970") return 'Unable to determine the time of year!';
  if (curDate.toDateString() == data.toDateString()) return 'Unable to determine the time of year!';
  switch(month) {
        case 12:
        case 1:
        case 2:
            season = 'winter';
        break;
        case 3:
        case 4:
        case 5:
            season = 'spring';
        break;
        case 6:
        case 7:
        case 8:
            season = 'summer';
        break;
        case 9:
        case 10: 
        case 11:
            season = 'autumn';
        break;
    }
  return season;
};
