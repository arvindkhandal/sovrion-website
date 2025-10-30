import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};
    const apiKey = process.env.SENDGRID_API_KEY;
    const from = process.env.SENDGRID_FROM_EMAIL;
    const to = process.env.SENDGRID_TO_EMAIL;
    if (apiKey && from && to) {
      sendgrid.setApiKey(apiKey);
      const content = `New contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
      const msg = { to, from, subject: `Contact form: ${name}`, text: content, html: `<pre>${content}</pre>` };
      await sendgrid.send(msg);
      return NextResponse.json({ ok: true, message: 'Email sent' }, { status: 200 });
    }
    return NextResponse.json({ ok: true, message: 'Received (no email sent - missing env keys)', data: body }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, message: 'Error' }, { status: 500 });
  }
}
