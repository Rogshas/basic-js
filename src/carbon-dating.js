const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  if (sampleActivity === '') return false;

  let act = Number(sampleActivity);
  if (isNaN(act) || act > 15 || act <= 0) return false;
   else {
    let ln = Math.log(15/sampleActivity);
    let t = (ln * 5730) / Math.LN2;
    return Math.ceil(t);
  }
};
