import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  const isSmtpConfigured = 
    process.env.SMTP_USER && 
    process.env.SMTP_USER !== 'your_email@gmail.com' &&
    process.env.SMTP_PASS && 
    process.env.SMTP_PASS !== 'your_app_password';

  if (!isSmtpConfigured) {
    console.log('\n==================================================');
    console.log('📬  MOCK EMAIL DISPATCHED (SMTP NOT CONFIGURED)');
    console.log(`To: ${process.env.RECEIVER_EMAIL || 'mallasurya189489@gmail.com'}`);
    console.log(`From: ${options.name} <${options.email}>`);
    console.log(`Subject: ${options.subject}`);
    console.log(`Message:\n${options.message}`);
    console.log('==================================================\n');
    return { success: true, mock: true };
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: parseInt(process.env.SMTP_PORT, 10) === 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${options.name}" <${process.env.SMTP_USER}>`, // Sent using authorized user
    replyTo: options.email, // Replies go to the sender's actual email
    to: process.env.RECEIVER_EMAIL || 'mallasurya189489@gmail.com',
    subject: `Portfolio Contact: ${options.subject}`,
    text: `You have received a new message from your portfolio contact form:\n\nName: ${options.name}\nEmail: ${options.email}\nSubject: ${options.subject}\n\nMessage:\n${options.message}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">New Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${options.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${options.email}">${options.email}</a></p>
        <p><strong>Subject:</strong> ${options.subject}</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #3b82f6; margin-top: 15px; border-radius: 4px;">
          <p style="white-space: pre-wrap; margin: 0;">${options.message}</p>
        </div>
        <p style="font-size: 11px; color: #888888; margin-top: 25px; border-top: 1px solid #eeeeee; padding-top: 10px;">
          This message was sent automatically from your developer portfolio contact system.
        </p>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(`Email dispatched successfully: ${info.messageId}`);
  return { success: true, messageId: info.messageId };
};

export default sendEmail;
