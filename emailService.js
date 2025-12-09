import { Resend } from "resend";

// Use your API key here
const resend = new Resend("re_QUP9ZWQB_5twg1bELn3NgtJwSqUWbvGsd");

export const sendEmail = async (to, subject, html) => {
  try {
    const response = await resend.emails.send({
      from: "TifStay <onboarding@resend.dev>", // Verified sender
      to,
      subject: "Hello",
      html: "<p>Welcome</p>",
    });
    console.log("Email sent:", response);
    return response;
  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
};
