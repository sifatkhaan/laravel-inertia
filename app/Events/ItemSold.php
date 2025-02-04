<?php

namespace App\Events;

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
    public $author;
    public $quantity;
    public $total_price;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(ItemStock $item, $quantity)
    {

        $this->item = $item;
        $this->author = $item->item->author;
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
