<?php

namespace App\Listeners;

use App\Events\ItemSold;
use App\Mail\SaleNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendSaleNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\ItemSold  $event
     * @return void
     */
    public function handle(ItemSold $event)
    {

        Log::info('Notification listner:', [
            'author' => $event->item->item->author,
            
        ]);
        $author = $event->item->item->author;
        if($author && $author->email){
            Mail::to($author->email)->send(new SaleNotification($event->item->item, $event->quantity));
        }
    }
}
