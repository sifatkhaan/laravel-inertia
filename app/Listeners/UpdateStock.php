<?php

namespace App\Listeners;

use App\Events\ItemSold;
use App\Models\ItemStock;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class UpdateStock
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
        Log::info('Stock Update listner:', [
            'author' => $event->item->item,
            
        ]);
        $stock = ItemStock::where('item_id', $event->item->item->id)->first();
        if($stock){
            $stock->decrement('quantity', $event->quantity);
        }
    }
}
