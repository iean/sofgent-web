# Email Setup for Contact Form

The contact form has been updated to send emails to `support@sofgent.com` when users submit the form.

## Environment Variables Required

Create a `.env.local` file in your project root with the following variables:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
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

## Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email (support@sofgent.com) for the new message

## Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords instead of your main account password
- Consider using a dedicated email account for website forms
