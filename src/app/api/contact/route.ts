import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define the POST handler for the contact form
export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    // Set up the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ini.e.sendy@gmail.com",
        pass: `NewBreed@1211`,
      },
    });

    // Define the email options
    const mailOptions = {
      from: email, // User's email
      to: "ini.e.sendy@gmail.com", // Your email
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new contact form submission: \n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
