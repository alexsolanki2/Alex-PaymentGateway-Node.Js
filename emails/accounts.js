const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv')
dotenv.config()

const sendGridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendGridAPIKey)

const sendTransSuccess = (emailTo, order, amt, mode, date, bank) => sgMail.send({
    to: emailTo,
    from: 'alexss.solanki1@gmail.com',
    subject: 'Invoice: Transaction Successful XD (Alex-Payment-Gateway)',
    text: `     Your Order ID: ${order}
     Amount You Paid: ${amt} ₹
     Mode Of Payment: ${mode}
     Date And Time Of Transaction ${date}
     Bank Name: ${bank}
     
     
     !! Thank You For Your Donation !!`
})

const sendTransFail = (emailTo, order, amt, date) => sgMail.send({
    to: emailTo,
    from: 'alexss.solanki1@gmail.com',
    subject: '!! Transaction Failed !! (Alex-Payment-Gateway)',
    text: `     Your Order ID: ${order}
     Amount You Tried To Pay: ${amt}
     Date And Time Of Transaction ${date}`
})

module.exports = {
    sendTransSuccess,
    sendTransFail
}