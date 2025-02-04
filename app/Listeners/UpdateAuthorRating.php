<?php

namespace App\Listeners;

use App\Events\ItemSold;
use App\Models\AuthorRating;
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

        if (!$author) {
            Log::error('Author not found for item:', ['item_id' => $item->id]);
            return;
        }
     
        
        if($author){
            $totalSales = $item->sale()->sum('quantity');
            $newRating = min(5, max(1, $totalSales/10)); 
            // $author->update(['rating'=>$newRating]);


             AuthorRating::updateOrCreate(
                ['author_id' => $author->id],  // 🔹 Search by author_id
                ['rating' => $newRating]       // 🔹 Update rating
            );
            Log::info('Author Rating listner:', [
              
                'result' => $author,
                'newRating' => $newRating,
                
            ]);
        }
    }
}
