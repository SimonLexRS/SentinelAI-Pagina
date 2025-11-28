require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function main() {
    console.log('Testing SMTP Connection (Port 587)...');
    console.log('Host:', process.env.SMTP_HOST);
    console.log('User:', process.env.SMTP_USER);

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587, // Try port 587
        secure: false, // false for 587, true for 465
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: false
        },
        debug: true,
        logger: true
    });

    try {
        await transporter.verify();
        console.log('✅ SMTP Connection Verified on Port 587!');

        const info = await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.SMTP_TO,
            subject: 'Test Email (Port 587)',
            text: 'Testing port 587 connection.',
        });

        console.log('✅ Message sent: %s', info.messageId);
    } catch (error) {
        console.error('❌ Error:', error);
    }
}

main();
