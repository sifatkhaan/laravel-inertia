<?php

namespace App\Events;

use App\Models\Item;
use App\Models\ItemStock;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class ItemSold
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $item;
    public $quantity;
    public $total_price;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(ItemStock $item, $quantity)
    {

        Log::info('Event Constructor Data:', [
            'event' => $item->item,
            
        ]);
        // var_dump('item', $item);
        // exit;
        $this->item = $item;
        $this->quantity = $quantity;
        $this->total_price = $item->item->price;
        
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
