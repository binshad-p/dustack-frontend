export async function POST(req) {
  const data = await req.formData();
  const name = data.get('name');
  const email = data.get('email');
  const company = data.get('company');
  const role = data.get('role');
  const message = data.get('message');

  // Dynamically import nodemailer to avoid build-time issues
  const nodemailer = await import('nodemailer');

  const transporter = nodemailer.default.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || email,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `New Demo Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\nMessage: ${message}`,
      html: `<b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Company:</b> ${company}<br/><b>Role:</b> ${role}<br/><b>Message:</b> ${message}`,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
