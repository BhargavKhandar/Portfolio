<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        try {
            // Send to admin
            Mail::send('emails.contact', ['data' => $data], function ($message) use ($data) {
                $message->to(env('MAIL_FROM_ADDRESS'))
                    ->from($data['email'], $data['name'])
                    ->subject("New Contact Form Submission: {$data['subject']}");
            });

            // Send confirmation to user
            Mail::send('emails.contact-confirmation', ['data' => $data], function ($message) use ($data) {
                $message->to($data['email'])
                    ->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))
                    ->subject("Thank you for contacting us, {$data['name']}");
            });

            return response()->json(['message' => 'Email sent successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to send email'], 500);
        }
    }
}
