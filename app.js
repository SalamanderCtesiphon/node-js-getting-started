require('dotenv').config();

process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"
process.env.NODE_ENV; // "development"

console.log(process.env.USER_ID);
console.log(process.env.USER_KEY);
console.log(process.env.NODE_ENV);