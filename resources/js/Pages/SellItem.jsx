import { router } from '@inertiajs/react';
import axios from 'axios';
import React, { useState } from 'react'

function SellItem({item}) {
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleSell = async () => {
        if (quantity <= 0) {
            alert('Quantity must be greater than 0');
            return;
        }
        setLoading(true)

        try {
            const res = await axios.post('/sell-item', {
                item_id: item.id,
                quantity,
                total_price:parseFloat(item.price)
            });
            alert(res.data.message);
            router.reload();
        } catch (error) {
            alert(error.response?.data?.error || 'Something went wrong')
        }
        setLoading(false);

    }
    return (
        <div>

            <h2>Sell Item: {item.name}</h2>
            <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border p-2"
            />
            <button
                onClick={handleSell}
                className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
                disabled={loading}
            >
                {loading ? 'Processing...' : 'Sell'}
            </button>
        </div>
    )
}

export default SellItem