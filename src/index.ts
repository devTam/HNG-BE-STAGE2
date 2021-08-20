import express from "express";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('client'))
app.use(express.json());

app.get("/", (_, res) => {
    res.sendFile(__dirname + '/client/index.html')
});

app.post("/", (req, res) => {
    const { body: { name, email, comment } } = req;
  
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "bigmikehng@gmail.com",
            pass: "bigmike101@"
        }
    });

    const mailOptions = {
        to: "bigmikehng@gmail.com",
        from: email,
        subject: `message from ${name} with email: ${email}`,
        text: comment
    }

    transporter.sendMail(mailOptions, (err: Error | null, info: SMTPTransport.SentMessageInfo) => {
        if(err) {
            console.log(err)
            res.json('Oops failed to send, Please try again')
        }else {
            res.json('Your message has been sent successfully');
        }

    })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
