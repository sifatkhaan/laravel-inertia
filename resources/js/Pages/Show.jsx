import React from 'react'

export default function Show({ blog }) {
    return (
        <div className='flex w-full justify-center my-10'>
            <div className='w-[80%]'>

                <div>
                <div className="w-full pt-8 pb-5">
                <img
                  src={`/storage/${blog.image}`}
                  alt=""
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
                    <div className="">
                        <h1 className="text-3xl font-crismo font-bold">{blog.title}</h1>
                        <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                        <span className='px-5'>{new Date(blog.created_at).toLocaleTimeString()}</span>
                        <div className="text-wrap  font-normal">{blog.body}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
