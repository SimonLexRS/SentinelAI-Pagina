import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, message, simon_says } = body;

        // Honeypot Anti-Spam Check
        if (simon_says) {
            console.log("Spam detected (honeypot filled):", { name, email, simon_says });
            // Return success to fool the bot, but don't send email
            return NextResponse.json(
                { message: 'Email sent successfully' },
                { status: 200 }
            );
        }

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false // Allow self-signed certificates or issues with trust chain
            }
        });

        // Verify connection configuration
        try {
            await transporter.verify();
            console.log("SMTP Connection verified");
        } catch (verifyError) {
            console.error("SMTP Connection Verification Failed:", verifyError);
            // We don't return here, we try to send anyway, but logging this is crucial
        }

        // Email content
        const mailOptions = {
            from: process.env.SMTP_FROM || '"Sentinel AI Website" <no-reply@sentinel-ia.com>',
            to: process.env.SMTP_TO || 'contact@sentinel-ia.com', // Default receiver
            subject: `Nuevo Mensaje de Contacto: ${name}`,
            text: `
        Nuevo mensaje recibido desde el formulario web:
        
        Nombre: ${name}
        Email: ${email}
        Empresa: ${company || 'No especificada'}
        
        Mensaje:
        ${message}
      `,
            html: `
        <h3>Nuevo Mensaje de Contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
        <br/>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error instanceof Error ? error.message : error },
            { status: 500 }
        );
    }
}
