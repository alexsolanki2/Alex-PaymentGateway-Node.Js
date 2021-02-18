const dotenv = require('dotenv')
dotenv.config()

var PaytmConfig = {
  mid: process.env.PAYTM_MID,
  key: process.env.PAYTM_KEY,
  website: "WEBSTAGING",
};

console.log(process.env.PAYTM_MID)
console.log(process.env.PAYTM_KEY)

module.exports.PaytmConfig = PaytmConfig;
