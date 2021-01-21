const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let res = '';
  for (let i=0; i < members.length; i++){
    if (typeof members[i] === 'string') {
      res += (members[i].match(/\b(\w)/g))[0] ;
      console.log(members[i].match(/\b(\w)/g)[0]);
      res += ',';
    }
  }
  return res.toUpperCase().split(',').sort().join('');
};
