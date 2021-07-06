const validator = require('validator');

const isValidEmail = validator.isEmail('userName@hotmail.com');
console.log(isValidEmail);

const password = 'a596$hjk100B';
const isStrongPassword = validator.isStrongPassword(password);
console.log(isStrongPassword);

const isAlpha = validator.isAlpha('1426AD3HG');
console.log(isAlpha);

const randomString = 'random3385hkm$^%as5f';
const contains = validator.contains(randomString, 'kljm');
console.log(contains);

const creditCardNumber = '4578 4562 5643 9173';
const isCreditCard = validator.isCreditCard(creditCardNumber);
console.log(isCreditCard);
