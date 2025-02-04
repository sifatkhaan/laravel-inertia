<?php

namespace App\Listeners;

use App\Events\ItemSold;
use App\Models\AuthorRating;
use Illuminate\Support\Facades\DB;
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

        $totalSales = DB::table('sales')
        ->join('items', 'sales.item_id', '=', 'items.id')
        ->where('items.author_id', $author->id)
        ->sum('sales.quantity');
     
        
        if($author){
            // $totalSales = $item->sale()->sum('quantity');
            $newRating = min(5, max(1, $totalSales/10)); 
             AuthorRating::updateOrCreate(
                ['author_id' => $author->id],
                ['rating' => $newRating]       
            );
            Log::info('Author Rating listner:', [
              
                'result' => $author,
                'newRating' => $newRating,
                'totalSales' => $totalSales,
                
            ]);
        }
    }
}
