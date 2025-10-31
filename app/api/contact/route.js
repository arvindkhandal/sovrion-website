import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const body = await req.json();

  try {
    await sendgrid.send({
      to: "youremail@example.com", // yahan apna email likho
      from: "youremail@example.com", // SendGrid verified sender email
      subject: `New contact from ${body.name}`,
      html: `<p><strong>Name:</strong> ${body.name}</p>
             <p><strong>Email:</strong> ${body.email}</p>
             <p><strong>Message:</strong> ${body.message}</p>`,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("SendGrid Error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
