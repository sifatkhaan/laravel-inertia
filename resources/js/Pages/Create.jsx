import { useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'

export default function Create() {

    console.log(usePage())
    const { data, setData, post, errors, processing } = useForm({
        title: "",
        image: null,
        body: ""
    })

    const { flash } = usePage().props;
    const [flashMsg, setFlashMsg] = useState(flash.message)

    setTimeout(() => {
        setFlashMsg(null)
    }, 2000)

    function onSubmit(e) {
        e.preventDefault()
        post("/blogs")
    }
    return (
        <>
            <div className='w-full my-10'>
                <div className='w-[80%]'>
                    <div className='flex justify-center'>
                        <div>
                            <h1>This is a Create Page </h1>
                            {flashMsg && (
                                <span className='bg-green-200 p-1 rounded-md'>{flashMsg}</span>
                            )}
                            <form onSubmit={onSubmit} className='block'>
                                <div>
                                    <input type="text"
                                        className='border border-gray-700'
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                    />
                                </div>
                                <div className='py-5'>
                                    <input className='border border-gray-700' type="file"
                                        // value={data.image} 
                                        onChange={e => setData('image', e.target.files[0])}
                                    />
                                </div>
                                <div>
                                    <textarea className='border border-gray-700' type="text"
                                        value={data.body}
                                        onChange={(e) => setData('body', e.target.value)}
                                    ></textarea>
                                </div>

                                <button type='submit' className='bg-green-500 px-4 py-1 text-white rounded-md' disabled={processing}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
