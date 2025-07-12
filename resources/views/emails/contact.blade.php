<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Contact Form Message</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2d3748;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> {{ $data['name'] }}</p>
        <p><strong>Email:</strong> {{ $data['email'] }}</p>
        <p><strong>Subject:</strong> {{ $data['subject'] }}</p>
        <div style="background: #f7fafc; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p>{{ $data['message'] }}</p>
        </div>
        <hr style="border: 1px solid #edf2f7; margin: 20px 0;">
        <p style="color: #718096; font-size: 0.875rem;">This message was sent from your portfolio contact form. url: {{ env('APP_URL') }}</p>
    </div>
</body>
</html>
