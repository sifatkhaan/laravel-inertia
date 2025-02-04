<?php

namespace App\Mail;

use App\Models\Item;
use App\Models\ItemStock;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class SaleNotification extends Mailable
{
    use Queueable, SerializesModels;


    public $item;
    public $quantity;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Item $item, $quantity)
    {

        Log::info('Notification Constructor Data:', [
            'Item' => $item,
            'quantity' => $quantity,
            
        ]);
        $this->item = $item;
        $this->quantity = $quantity;
    }

    public function build()
    {
        return $this->subject('New Sale Notification')
                    ->view('emails.sale_notification')
                    ->with([
                        'item' => $this->item,
                        'quantity' => $this->quantity,
                    ]);
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Sale Notification',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: 'emails.sale_notification',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
