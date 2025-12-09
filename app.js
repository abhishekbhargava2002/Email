import express from "express";
const app = express();
import { sendEmail } from "./emailService.js"; // note ./ and .js

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    statas: true,
    message: "Working.....",
  });
});

app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000);

  await sendEmail(email, "Your OTP Code", `<h2>Your OTP is: ${otp}</h2>`);

  res.json({ status: true, message: "OTP sent", otp });
});

app.listen(4000, () => console.log("Server running on 4000"));
