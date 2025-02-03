<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Log;

class SaleNotification extends Notification
{
    use Queueable;

    protected $item;
    protected $quantity;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($item, $quantity)
    {
        Log::info('Notification Constructor Data:', [
            'item' => $item->item,
            'quantity' => $quantity,
            
        ]);
        
        $this->item = $item;
        $this->quantity = $quantity;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('New Sale Notification')
            ->greeting('Hello, ' . $notifiable->name)
            ->line('Your item **' . $this->item->name . '** has been sold!')
            ->line('Quantity Sold: ' . $this->quantity)
            ->line('The introduction to the notification.')
            ->action('Notification Action', url('/sales'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
