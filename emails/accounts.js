const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv')
dotenv.config()

const sendGridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendGridAPIKey)

const sendTransSuccess = (order, amt, mode, date, bank) => sgMail.send({
    to: 'alexss.solanki1@gmail.com',
    from: 'alexss.solanki1@gmail.com',
    subject: 'Invoice: Transaction Successful XD (Alex-Payment-Gateway)',
    text: `    Your Order ID: ${order}
     Amount You Paid: ${amt}
     Mode Of Payment: ${mode}
     Date And Time Of Transaction ${date}
     Bank Name: ${bank}
     
     
     Thank You`
})

const sendTransFail = (order, amt, mode, date, bank) => sgMail.send({
    to: 'alexss.solanki1@gmail.com',
    from: 'alexss.solanki1@gmail.com',
    subject: 'Invoice: !! Transaction Failed !! (Alex-Payment-Gateway)',
    text: `    Your Order ID: ${order}
     Amount You Paid: ${amt}
     Mode Of Payment: ${mode}
     Date And Time Of Transaction ${date}
     Bank Name: ${bank}`
})

module.exports = {
    sendTransSuccess,
    sendTransFail
}