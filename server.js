const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send email
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server is listening on port 5000.."));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lokendrasahare612@gmail.com",
    pass: "",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready To Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "lokendrasahare612@gmail.com",
    subject: "Contact From Submission - Portfolio",
    html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Phone: ${phone} </p>
            <p>Message: ${message} </p>
        `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
