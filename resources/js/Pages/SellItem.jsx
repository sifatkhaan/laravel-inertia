import { router } from '@inertiajs/react';
import { Image } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'

function SellItem({ item }) {
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);


    const giftWrap = parseFloat(120 + (quantity - 1) * 50);
    const shippingCost = parseFloat(100 + (quantity - 1) * 20);
    const subTotal = parseFloat(item.price * quantity)
    const grandTotal = parseFloat(giftWrap+shippingCost + subTotal)

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
                total_price: parseFloat(item.price)
            });
            alert(res.data.message);
            router.reload();
        } catch (error) {
            alert(error.response?.data?.error || 'Something went wrong')
        }
        setLoading(false);

    }
    return (
        <div className='flex w-full justify-center '>
            <div className='w-full md:w-[80%] bg-[#fff6f6e6] py-2 md:py-5 px-2'>
                <div className='md:flex w-full gap-3'>
                    <div className='w-full md:w-2/3 gap-3 justify-between items-center min-h-[50vh]' >
                        <div className='grid grid-cols-3 w-full justify-between items-center p-2 bg-lime-100 font-bold'>
                            <h2 className='text-left'>Item</h2>
                            <h2 className='text-left'>Item Name</h2>
                            <h2 className='text-left '>Quantity</h2>
                        </div>
                        <div className='grid grid-cols-3 w-full justify-between items-center py-3'>
                            <div className='w-20 md:w-32'>
                                <Image
                                    src={item.image}
                                    alt=""
                                    // width={90}
                                    className="object-cover rounded-sm"
                                />
                            </div>
                            <div>
                                <h2>{item.name}</h2>
                            </div>
                            <div className='flex w-auto md:w-1/3'>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    className="md:max-w-full max-w-[90px] border p-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 border border-lime-600 p-1  '>

                        <div className=' w-full'>
                            <div>

                                <div className="space-y-1 text-primary  px-1 py-2 pb-1 mt-1 rounded-sm">
                                    <div className="flex justify-between border-b border-lime-600 space-y-1">
                                        <span>Subtotal (+):</span>
                                        <span>{subTotal?.toFixed(2)} Tk</span>
                                    </div>

                                    <div className="flex justify-between border-b border-lime-600 space-y-1">
                                        <span>Gift Wrap (+):</span>
                                        <span>{ giftWrap?.toFixed(2)} Tk</span>
                                    </div>

                                    <div className="flex justify-between border-b border-lime-600 space-y-1">
                                        <span>Shipping (+):</span>
                                        <span>{shippingCost?.toFixed(2)} Tk</span>
                                    </div>
                                    <div className="flex justify-between font-bold pb-1">
                                        <span>Total:</span>
                                        <span>{grandTotal?.toFixed(2)} Tk</span>
                                    </div>
                                    <hr className="border-t-0 border-solid border-[#d3d3d3]" />

                                </div>
                                <div className="text-primary px-1">
                                    {/* <div className="flex justify-between my-2">
                                        <span>Discount (BDT):</span>
                                        <span><input type="number" value={discount} onChange={handleDiscountChange} className="w-16 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#fff1a4] text-[#ff5100] px-1" style={{ border: "1px solid #ff5100" }} /></span>
                                    </div> */}
                                    <div className="flex bg-lime-600 p-1 px-2 text-md rounded-sm rounded-bl-none rounded-br-none text-white justify-between font-bold pb-1">
                                        <span>Payable:</span>
                                        <span>{grandTotal?.toFixed(2)} Tk</span>
                                    </div>
                                    <hr className="border-t-0 border-solid border-[#ff9463]" />
                                </div>
                            </div>
                        </div>
                        <div className='flex my-5 justify-center'>
                            <button
                                onClick={handleSell}
                                className="bg-lime-600 text-white px-4 py-2 rounded-md ml-2 hover:bg-lime-500"
                                disabled={loading}
                            >
                                {loading ? 'Processing...' : 'Confirm'}
                            </button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default SellItem