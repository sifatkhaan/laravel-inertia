import React, { useReducer, useState } from 'react'
import { Button, Rate } from 'antd';
import { router } from '@inertiajs/react';

const tabReducer = (state, action) => {
    switch (action.type) {
        case "SET_TAB":
            return { activeTab: action.payload }
        default:
            return state
    }
}

function ItemShow({ item }) {
    const [state, dispatch] = useReducer(tabReducer, { activeTab: "description" });
    const handleBuyNow = () => {
        router.get(`/sell-item/${item.id}`);
    };

    console.log(item, 'item')

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
                        <button className={`my-2 border-b-2 ${state.activeTab === "description" ? "border-green-500 text-gray-700" : "border-transparent hover:text-gray-700"
                            }`} onClick={() => dispatch({ type: "SET_TAB", payload: "description" })}>Description</button>
                        <button className={`my-2 border-b-2 ${state.activeTab === "author" ? "border-green-500 text-gray-700" : "border-transparent hover:text-gray-700"
                            }`} onClick={() => dispatch({ type: "SET_TAB", payload: "author" })}>Author Info</button>
                        <button className={`my-2 border-b-2 ${state.activeTab === "video" ? "border-green-500 text-gray-700" : "border-transparent hover:text-gray-700"
                            }`} onClick={() => dispatch({ type: "SET_TAB", payload: "video" })}>Video</button>
                    </div>
                    {state.activeTab === "author" ? (
                        <div className='flex items-start gap-5 my-3 py-2'>
                            <div>
                                <img
                                    src={item.author.image}
                                    alt=""
                                    className="w-32 object-cover rounded-sm"
                                />
                            </div>
                            <div className='my-3 py-5'>
                                <p>Name: {item?.author.name}</p>
                                <p>Rating: {item?.author?.author_rating?.rating}</p>
                                <p>Email: {item?.author.email}</p>
                                <p>Phone: {item?.author.phone}</p></div>

                        </div>
                    ) : state.activeTab === "video" ? (
                        <div>
                            <h2 className='py-2'>This is vedio section</h2>
                            <div>
                                {item?.video ? (
                                    <video controls className="w-[600px] h-[400px] object-fillable">
                                        <source src={item.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <div className='w-1/2 h-28 bg-white flex items-center justify-center'>
                                        <h2 className='font-semibold text-2xl text-gray-800 p-5'>
                                       OOps!! No Video Available!!
                                    </h2>
                                    </div>
                                )}

                            </div>
                        </div>
                    ) : (
                        <div>
                           <div className='w-[40%] py-5 text-gray-700 '>
                        
                            <div className=' py-2 font-crismo text-lg px-5'>
                                <div className='py-2'>
                                    <label htmlFor="" className='font-semibold'>Name: </label>
                                    <span>{item?.name}</span>
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
                                <div  className='py-2'>
                                    <span className='font-semibold'>Availability: </span>
                                 {item?.stock?.quantity === 0 ? <span>No Stock</span> : item?.stock?.quantity <= 2 ?  <span className='text-yellow-600'>Low Stock</span> : item?.stock?.quantity >= 3 ? <span className='text-green-600'>In Stock</span> : <span className='font-bold text-purple-600'>Demo Work</span>}
                                </div>
                            </div>
                        </div>
                        </div>
                    )}
                </div>


            </div>
        </div>
    )
}

export default ItemShow

