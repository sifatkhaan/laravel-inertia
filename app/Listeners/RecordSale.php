<?php

namespace App\Listeners;

use App\Events\ItemSold;
use App\Models\Sale;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class RecordSale
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
        Log::info('record Sale listner:', [
            'Sale' => $event->item->item->id,
            'total_price' => $event->total_price,
            'author' => $event->author,
            
        ]);

        Sale::create([
            'item_id'=> $event->item->item->id,
            'quantity'=> $event->quantity,
            'total_price' => $event->total_price,
        ]);
    }
}
