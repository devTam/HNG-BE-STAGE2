"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const app = express_1.default();
const port = process.env.PORT || 5000;
app.use(express_1.default.static('client'));
app.use(express_1.default.json());
app.get("/", (_, res) => {
    res.sendFile(__dirname + '/client/index.html');
});
app.post("/", (req, res) => {
    const { body: { name, email, comment } } = req;
    const transporter = nodemailer_1.default.createTransport({
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
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.json('Oops failed to send, Please try again');
        }
        else {
            res.json('Your message has been sent successfully');
        }
    });
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
