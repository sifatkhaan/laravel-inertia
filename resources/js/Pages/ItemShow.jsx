import React from 'react'
import { Button, Rate } from 'antd';
import { router } from '@inertiajs/react';

function ItemShow({ item }) {

    const handleBuyNow = () => {
        router.get(`/sell-item/${item.id}`);
      };

    return (
        <div className='flex w-full justify-center '>
            <div className='w-[80%] bg-[#fff6f6e6]'>
                {item?.is_portrait ? (
                    <div className='flex w-full gap-4'>
                        <div className="w-[60%] px-2 py-5 ">
                            <img
                                src={item.image}
                                alt=""
                                className=" object-cover rounded-md"
                            />
                        </div>
                        <div className='w-[40%] py-5 text-gray-700 '>
                            <h1 className='text-2xl font-bold font-noto pb-2'>{item?.name}</h1>
                            <div className='border-y-2 py-2 font-crismo text-lg px-5'>
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
                            <div className='py-2'>
                                <div className='flex items-center gap-3 '>
                                    <h2 className='text-2xl font-bold font-noto'>Tk. {item?.price}</h2>
                                    <h4 className='line-through'>Tk. {item?.price}</h4>
                                </div>
                                <div className='flex gap-2 text-sm py-2'>
                                    <span>
                                        <Rate disabled defaultValue={2} className='text-sm' />
                                    </span>
                                    <span>2 Reviews</span>
                                </div>
                                <div >
                                    <span className='font-semibold'>Availability: </span>
                                    <span className='text-green-600'>In stock</span>
                                </div>

                                <div className='py-8 flex w-full justify-center'>
                                    <Button className='bg-lime-600 p-5 px-10 text-white font-bold font-crismo text-lg' onClick={handleBuyNow}>Buy Now</Button>
                                </div>
                                <div className='flex w-full justify-center'>
                                    <Button className='bg-[#E75876] p-5 px-10 text-white font-bold font-crismo text-lg'>Order Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex gap-4 items-start'>
                        <div className="flex w-[70%] py-5 px-2">
                            <img
                                src={item.image}
                                alt=""
                                className=" object-cover rounded-md"
                            />
                        </div>
                        <div className='py-5 text-gray-700 w-[25%]'>
                            <h1 className='text-2xl font-bold font-noto pb-2'>{item?.name}</h1>
                            <div className='border-y-2 py-2 font-crismo text-lg px-4'>
                                <div className='py-2'>
                                    <span className='font-semibold'>Category: </span>
                                    <span>{item?.category.name}</span>
                                </div>
                                <div className='py-2'>
                                    <span className='font-semibold'>Artist: </span>
                                    <span>{item?.category.name}</span>
                                </div>
                                <div className='py-2'>
                                    <span className='font-semibold'>Mode: </span>
                                    <span>{item?.is_portrait ? 'Portrait' : 'Landscape'}</span>
                                </div>
                                <div className='py-2'>
                                    <span className='font-semibold'>Media: </span>
                                    <span>{item?.media.name}</span>
                                </div>
                                {/* <div  className='py-2'>
                                <span className='font-semibold'>Dimension: </span>
                                <span>{item?.dimension.name}</span>
                            </div> */}
                                <div className='py-2'>
                                    <span className='font-semibold'>Material: </span>
                                    <span>{item?.material.name}</span>
                                </div>
                            </div>
                            <div className='py-2 pb-3'>
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-2xl font-bold font-noto'>Tk. {item?.price}</h2>
                                    <h4 className='line-through'>Tk. {item?.price}</h4>
                                </div>
                                <div className='flex gap-2 text-sm py-2'>
                                    <span>
                                        <Rate disabled defaultValue={2} className='text-sm' />
                                    </span>
                                    <span>2 Reviews</span>
                                </div>
                                <div >
                                    <span className='font-semibold'>Availability: </span>
                                    <span className='text-green-600'>In stock</span>
                                </div>

                                <div className='py-8 flex w-full justify-center'>
                                    <Button className='bg-lime-600 p-5 px-10 text-white font-bold font-crismo text-lg' onClick={handleBuyNow}>Buy Now</Button>
                                </div>
                                <div className='flex w-full justify-center'>
                                    <Button className='bg-[#E75876] p-5 px-10 text-white font-bold font-crismo text-lg'>Order Now</Button>
                                </div>
                            </div>
                            <div className='border-y-2 py-3'>
                                <span className='font-bold'>Call for Order : +8801515249342</span>
                            </div>
                        </div>
                    </div>
                )}
                <div className='py-5 text-gray-700 px-2'>
                    <div className='flex gap-5 border-b-4 font-bold text-gray-400'>
                        <button className='my-2 border-green-500 border-b-2 hover:text-gray-700'>Description</button>
                        <button className='my-2 border-green-900 hover:text-gray-700'>Author Info</button>
                        <button className='my-2 border-green-900 hover:text-gray-700'>Video</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemShow

