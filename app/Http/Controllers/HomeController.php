<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $contacts = Contact::select('id', 'name', 'email', 'image')->get();

        $contacts->transform(function ($contact) {
            $contact->image_url = $contact->image ? asset('storage/'.$contact->image) : null;
            return $contact;
        });

        return Inertia::render('Welcome', [
            'contacts' => $contacts
        ]);
    }
}
