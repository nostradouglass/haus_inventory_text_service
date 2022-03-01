// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

import pkg from 'twilio'
const client = pkg(accountSid, authToken);

const TWILIO_PHONE = '+14054587477'
const PERSON_TO_TEXT = '+14053081131'

export default (data) => {
  if (data.length > 0) {
    const bodies = data.map((item) => {
      return `Please Reorder ${item.item_name} \n`
    })
    
    client.messages
      .create({
        body: bodies.join(''),
        from: TWILIO_PHONE,
        to: PERSON_TO_TEXT
      })
      .then((message) => console.log(message.sid));
  }

}
