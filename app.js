var crypto = require('crypto');

var cipher = crypto.createCipher("aes192", "myPassword");

var text = 'David123';
var crypted = cipher.update(text,'utf8','hex');
crypted += cipher.final('hex');
console.log(crypted);