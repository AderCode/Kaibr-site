import mailgunLoader from 'mailgun-js';
let mailgun = mailgunLoader({ apiKey: process.env.MAILGUN_API_KEY, domain: 'mg.kaibr.net' });

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