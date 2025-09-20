import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../../../services/email';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();
    
    console.log('📧 Email API called with data:', { name, email, phone, service, message: message.substring(0, 50) + '...' });

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.ZEPTOMAIL_TOKEN || !process.env.TO_EMAIL) {
      console.error('❌ Missing required environment variables (ZEPTOMAIL_TOKEN, TO_EMAIL)');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Prepare email recipients
    const recipients = process.env.TO_EMAIL!.split(',').map(email => email.trim());
    
    // Send email using ZeptoMail service
    console.log('🚀 Attempting to send consultation email...');
    
    // Send to each recipient using consultation request template
    const emailPromises = recipients.map(recipientEmail => 
      emailService.sendConsultationRequestEmail(
        recipientEmail,
        {
          clientName: name,
          clientEmail: email,
          clientPhone: phone || 'Not provided',
          clientService: service || 'Not specified',
          clientMessage: message
        }
      )
    );
    
    const results = await Promise.allSettled(emailPromises);
    const successful = results.filter(result => result.status === 'fulfilled' && result.value === true).length;
    const failed = results.length - successful;
    
    if (successful > 0) {
      console.log(`✅ Email sent successfully to ${successful} recipient(s)`);
      return NextResponse.json(
        { message: `Email sent successfully to ${successful} recipient(s)`, successful, failed },
        { status: 200 }
      );
    } else {
      console.error('❌ Failed to send email to any recipients');
      return NextResponse.json(
        { error: 'Failed to send email to any recipients' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('❌ Error sending email:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}