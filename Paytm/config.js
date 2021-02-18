const dotenv = require('dotenv')
dotenv.config()

var PaytmConfig = {
  mid: process.env.PAYTM_MID,
  key: process.env.PAYTM_KEY,
  website: "WEBSTAGING",
};

module.exports.PaytmConfig = PaytmConfig;
