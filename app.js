const express = require('express');
const app = express();
const port = 1234;

app.use(express.static('views'));
app.use(express.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
    console.log(req.body);
    //Construct the message object according the form fields
    res.redirect(`https://wa.me/919441363963?text=${req.body.message}`)
});

app.listen(port);

//Ref : https://faq.whatsapp.com/en/android/26000030/
