# Email & WhatsApp Setup for Contact Form

The contact form has been updated to send emails to `support@sofgent.com` and WhatsApp notifications when users submit the form.

## Environment Variables Required

Create a `.env.local` file in your project root with the following variables:

```bash
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# WhatsApp Configuration (Optional)
WHATSAPP_NUMBER=+8801537740365
WHATSAPP_API_URL=https://your-whatsapp-api-endpoint.com/send
```

## Gmail Setup Instructions

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to [Google Account settings](https://myaccount.google.com/)
   - Navigate to Security > 2-Step Verification
   - Scroll down and click on "App passwords"
   - Select "Mail" as the app and "Other" as the device
   - Generate the password and use it as `EMAIL_PASS`

## Alternative Email Services

You can modify the `app/api/contact/route.ts` file to use other email services:

- **Outlook/Hotmail**: Change `service: 'gmail'` to `service: 'outlook'`
- **Custom SMTP**: Replace the service configuration with your SMTP settings

## WhatsApp Setup (Optional)

To enable WhatsApp notifications, you'll need:

1. **WhatsApp Business API** or a third-party service like:

   - Twilio WhatsApp API
   - WhatsApp Cloud API
   - MessageBird
   - 360Dialog

2. **Configuration**:

   - Set `WHATSAPP_NUMBER` to your business WhatsApp number
   - Set `WHATSAPP_API_URL` to your WhatsApp API endpoint

3. **Example with Twilio**:
   ```bash
   WHATSAPP_NUMBER=+8801537740365
   WHATSAPP_API_URL=https://api.twilio.com/2010-04-01/Accounts/YOUR_ACCOUNT_SID/Messages.json
   ```

## Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email (support@sofgent.com) for the new message
5. Check your WhatsApp for the notification (if configured)

## Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords instead of your main account password
- Consider using a dedicated email account for website forms
