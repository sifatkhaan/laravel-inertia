import React from 'react'

function ItemShow({ item }) {

    console.log(item, 'item')

    return (
        <div className='flex w-full justify-center '>
            {item?.is_portrait ? (
                <div className='w-[80%] bg-[#fff6f6e6]'>
                    <div className='flex w-full gap-2'>
                        <div className="w-[60%] px-2 py-5 ">
                            <img
                                src={item.image}
                                alt=""
                                className=" object-cover rounded-md"
                            />
                        </div>
                        <div className='w-[40%] py-5 px-2'>
                            <h2 className='text-center text-3xl font-bold text-gray-700 capitalize '>Item details</h2>
                            <div className='w-full py-10'>
                                <div className='py-2'>
                                    <label htmlFor="" className='font-semibold'>Name: </label>
                                    <span>{item?.name}</span>
                                </div>
                                <div className='py-2'>
                                    <label htmlFor="" className='font-semibold'>Price: </label>
                                    <span>৳ {item?.price}</span>
                                </div>
                                <div className='py-2'>
                                    <label htmlFor="" className='font-semibold'>Media: </label>
                                    <span>{item?.media?.name}</span>
                                </div>
                                <div className='py-2'>
                                    <label htmlFor="" className='font-semibold'>Material: </label>
                                    <span>{item?.material?.name}</span>
                                </div>
                                <div className='py-2'>
                                    <label htmlFor="" className='font-semibold'>Category: </label>
                                    <span>{item?.category?.name}</span>
                                </div>
                                <div className='py-2'>
                                    <label htmlFor="" className='font-semibold'>Mode: </label>
                                    <span>{item?.is_portrait ? 'Portrait' : 'Landscape'}</span>
                                </div>
                                <div className='py-2'>
                                    <label htmlFor="" className='font-semibold'>Description: </label>
                                    <span>{item?.description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-[80%] bg-[#fff6f6e6]'>
                    <div>
                        <div className="flex justify-center w-full py-5">
                            <img
                                src={item.image}
                                alt=""
                                className="w-[80%] object-cover rounded-md"
                            />
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ItemShow