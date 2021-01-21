const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 0 ;
  let seconds = 0;
  let res = {
  turns: turns,
  seconds: seconds
};
  
  res.turns = Math.pow(2, disksNumber) -1;
  res.seconds = Math.floor(3600/ turnsSpeed * res.turns);
  
  return res;
};
