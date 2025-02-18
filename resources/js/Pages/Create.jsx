import { useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import { Input } from 'antd'
const { TextArea } = Input;

export default function Create() {


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
                                    <Input
                                        type="text"
                                        className='border border-gray-700'
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        placeholder='Enter Title'
                                    />
                                </div>
                                <div className='py-5'>
                                    <Input className='border border-gray-700' type="file"
                                        // value={data.image} 
                                        onChange={e => setData('image', e.target.files[0])}
                                    />
                                </div>
                                <div className='mb-5'>
                                    <TextArea
                                        className='border border-gray-700'
                                        rows={4}
                                        value={data.body}
                                        onChange={(e) => setData('body', e.target.value)}
                                        placeholder='Enter Description'
                                    />
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
