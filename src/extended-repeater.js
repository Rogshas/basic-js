const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  options.repeatTimes;
  options.separator;
  options.addition;
  options.additionRepeatTimes;
  options.additionSeparator;
  if (options.additionSeparator === undefined) options.additionSeparator = '';
  if (options.addition === undefined) options.addition = '';
  if (options.additionRepeatTimes === undefined) {options.additionRepeatTimes = 1; options.additionSeparator = '';}
  if (options.separator === undefined) options.separator = '+';
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  let res = '';
  if (options.repeatTimes !== 0) {
  str = str + (options.addition+options.additionSeparator).repeat(options.additionRepeatTimes);
  str = str.substring(0,str.length-options.additionSeparator.length);
  res = (str + options.separator).repeat(options.repeatTimes);
  res = res.substring(0,res.length-options.separator.length);
  }
  return res;
};
  