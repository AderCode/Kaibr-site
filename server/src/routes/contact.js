import { Router } from 'express';
import { sendEmail } from '../utils/mailgun';

let router = Router();

router.post('/', (req, res, next) => {
    let messageBody = `
        Name: ${req.body.name}
        Email: ${req.body.email}
        Subject: ${req.body.subject}
        Message: ${req.body.message}`

    let verificationMessage = `
    Hey ${req.body.name},
    Thank you for your expressed interest in Kaibr.net. Your request for info has been sent to our team for processing and someone should be getting back with you shortly.

    Until next we meet again!!!

    <3
    Dev Team
    `
    sendEmail(req.body.email, false, "no-reply@kaibr.net", "Request for Info - Sent", verificationMessage)
        .then((r) => {
            sendEmail("matthew@kaibr.net", "luke@kaibr.net", "no-reply@kaibr.net", "Request for Info", messageBody)
                .then((r) => {
                    res.sendStatus(201);
                }).catch((err) => {
                    next(err);
                })
        }).catch((err) => {
            next(err);
        });
});

export default router;