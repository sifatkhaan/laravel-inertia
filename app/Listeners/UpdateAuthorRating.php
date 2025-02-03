<?php

namespace App\Listeners;

use App\Events\ItemSold;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class UpdateAuthorRating
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
        
        $item = $event->item->item;
        $author = $item->author;
        Log::info('Author Rating listner:', [
            'author' => $author,
            'total' => $item->sale()->sum('quantity'),
            
        ]);
        
        if($author){
            $totalSales = $item->sale()->sum('quantity');
            $newRating = min(5, max(1, $totalSales/100)); 
            $author->update(['rating'=>$newRating]);
        }
    }
}
