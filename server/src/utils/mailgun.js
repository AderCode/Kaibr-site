import mailgunLoader from 'mailgun-js';
let mailgun = mailgunLoader({ apiKey: process.env.MAILGUN_API_KEY, domain: 'sandbox94d6c92fa410423bb092cf1310137350.mailgun.org' });

function sendEmail(to, cc, from, subject, content) {
    let data;
    cc
        ?
        data = {
            to,
            cc,
            from,
            subject,
            text: content
        }
        :
        data = {
            to,
            from,
            subject,
            text: content
        }

    return mailgun.messages().send(data)
};

export { sendEmail };