const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail')
const cors = require('cors');


const app = express();
const appName = 'Eduzo API';
const port = 4000;

app.use(cors())
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));

app.get('/hello', (req, res) => {
    res.send('hello i am workig')
})


app.get('/index', (req, res) => {
    res.sendfile('index.html')
})

app.post('/formsubmit', (req, res) => {
    sgMail.setApiKey('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')
    const msg = {
        to: req.body.email, // Change to your recipient
        from: 'contact@eduneka.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

    res.send('working')
})

app.listen(port, () => {
    console.log(`${appName} listening on port ${port}`);
    // res.send('hello i am workoimh')
})