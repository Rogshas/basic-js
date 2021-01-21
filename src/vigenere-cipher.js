const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
    this._tabulaRecta =  {
      a: "abcdefghijklmnopqrstuvwxyz",
      b: "bcdefghijklmnopqrstuvwxyza",
      c: "cdefghijklmnopqrstuvwxyzab",
      d: "defghijklmnopqrstuvwxyzabc",
      e: "efghijklmnopqrstuvwxyzabcd",
      f: "fghijklmnopqrstuvwxyzabcde",
      g: "ghijklmnopqrstuvwxyzabcdef",
      h: "hijklmnopqrstuvwxyzabcdefg",
      i: "ijklmnopqrstuvwxyzabcdefgh",
      j: "jklmnopqrstuvwxyzabcdefghi",
      k: "klmnopqrstuvwxyzabcdefghij",
      l: "lmnopqrstuvwxyzabcdefghijk",
      m: "mnopqrstuvwxyzabcdefghijkl",
      n: "nopqrstuvwxyzabcdefghijklm",
      o: "opqrstuvwxyzabcdefghijklmn",
      p: "pqrstuvwxyzabcdefghijklmno",
      q: "qrstuvwxyzabcdefghijklmnop",
      r: "rstuvwxyzabcdefghijklmnopq",
      s: "stuvwxyzabcdefghijklmnopqr",
      t: "tuvwxyzabcdefghijklmnopqrs",
      u: "uvwxyzabcdefghijklmnopqrst",
      v: "vwxyzabcdefghijklmnopqrstu",
      w: "wxyzabcdefghijklmnopqrstuv",
      x: "xyzabcdefghijklmnopqrstuvw",
      y: "yzabcdefghijklmnopqrstuvwx",
      z: "zabcdefghijklmnopqrstuvwxy"
    }
        }
    encrypt (plainText, keyword){
      if( typeof(plainText) !== "string" ){
        return "invalid plainText. Must be string, not " + typeof(plainText);
      }
      if( typeof(keyword) !== "string" ){
        return "invalid keyword. Must be string, not " + typeof(keyword);
      }
  
      plainText = plainText.toLowerCase();
      keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
      var encryptedText = "";
      var specialCharacterCount = 0;
      var res = "";
      for( var i = 0; i < plainText.length; i++ ){
        var keyLetter = (i - specialCharacterCount) % keyword.length;
        var keywordIndex = this._tabulaRecta.a.indexOf(keyword[keyLetter]);
  
        if( this._tabulaRecta[plainText[i]] ){
          encryptedText += this._tabulaRecta[plainText[i]][keywordIndex];
        }else{
          encryptedText += plainText[i];
          specialCharacterCount++;
        }
      }
  if (this.reverse || this.reverse === undefined)
      return encryptedText.toUpperCase();
      else {
        for (i =encryptedText.length-1; i>=0; i--){
          res += encryptedText[i];
        }
        return res.toUpperCase();
      }
    }
  
    decrypt (encryptedText, keyword){
      if( typeof(encryptedText) !== "string" ){
        throw 'THROWN';
      }
      if( typeof(keyword) !== "string" ){
        throw 'THROWN';
      }
  
      encryptedText = encryptedText.toLowerCase();
      keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
      var decryptedText = "";
      var specialCharacterCount = 0;
      var res = "";
      
      for( var i = 0; i < encryptedText.length; i++ ){
        var keyLetter = (i - specialCharacterCount) % keyword.length;
        var keyRow = this._tabulaRecta[keyword[keyLetter]];
  
        if( keyRow.indexOf(encryptedText[i]) !== -1 ){
          decryptedText += this._tabulaRecta.a[keyRow.indexOf(encryptedText[i])];
        }else{
          decryptedText += encryptedText[i];
          specialCharacterCount++;
        }
      }
      
  if (this.reverse || this.reverse === undefined)
      return decryptedText.toUpperCase();
    else {
        for (i =decryptedText.length-1; i>=0; i--){
          res += decryptedText[i];
        }
        return res.toUpperCase();
      }
    }  
}

module.exports = VigenereCipheringMachine;
