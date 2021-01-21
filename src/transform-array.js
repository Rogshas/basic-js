const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  res = [];
 if (!Array.isArray(arr)) throw 'THROWN';
  
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next' :
        i++;
      break;
      case '--discard-prev' :
        if (arr[i-2] !== '--discard-next' && arr[i-1] !== '--discard-next') res.pop();
      break;
      case '--double-next' :
        if (i !== arr.length-1) res.push(arr[i+1]);
      break;
      case '--double-prev' :
        if (i !==0 && arr[i-2] !== '--discard-next' && arr[i-1] !== '--discard-next') res.push(arr[i-1]);
      break;
      default :
       res.push(arr[i]);
    }
  }
  return res
};
