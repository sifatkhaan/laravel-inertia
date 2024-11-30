import { Link } from '@inertiajs/react'
import React from 'react'

export default function Layout({children}) {
  return (
    <>
        <header className='flex bg-lime-700 w-full justify-center items-center h-14 text-white text-xl'>
            <nav className='w-[80%] flex justify-between font-cursive '>
                <Link className='hover:text-purple-200' href="/">Home</Link>
                <Link className='hover:text-purple-200' href="#">About</Link>
                <Link className='hover:text-purple-200' href="#">Contact</Link>
                <Link className='hover:text-purple-200' href="/blog-list">Blog</Link>
                <Link className='hover:text-purple-200' href="/blogs/create">Create</Link>
                <Link className='hover:text-purple-200' href='/login'>
                <button className='bg-purple-400 px-3 rounded-md shadow-md text-base hover:bg-purple-500 py-0.5'>Login</button></Link>
            </nav>
        </header>
        <main>
            {children}
        </main>
    </>
  )
}
