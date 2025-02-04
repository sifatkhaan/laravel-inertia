
import { Link, usePage } from '@inertiajs/react'
import { Dropdown, Space, Button, Drawer } from 'antd';
import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import { FiMenu } from 'react-icons/fi';

export default function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [placement, setPlacement] = useState('right');
  const [isSidMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const showDrawer = () => {
    setIsSideMenuOpen(true);
  };
  const onClose = () => {
    setIsSideMenuOpen(false);
  };

  const { categories } = usePage().props
  const items = categories.map((category) => ({
    key: category.id,
    label: <Link href={`/category/${category.id}`}>{category.name}</Link>,
    children: category.sub_categories?.map((sub) => ({
      key: sub.id,
      label: <Link href={`/category/${category.id}?sub=${sub.id}`}>{sub.name}</Link>,
    }))
  }))


  // const items = [
  //   {
  //     key: '1',
  //     label: <a href="/water-color/1">Water Color</a>,
  //   },
  //   {
  //     key: '2',
  //     label: <a href="/pen-sketch">Pen Sketch</a>,
  //     children:[
  //       {
  //         key:'1',
  //         label:'Portrait'
  //       },
  //       {
  //         key:'2',
  //         label:'Landscape',
  //         children:[
  //           {
  //             key:'1',
  //             label:'Black',
  //             children:[
  //               {
  //                 key:'1',
  //                 label:'Dark'
  //               },
  //               {
  //                 key:'2',
  //                 label:'Light'
  //               },
  //             ]
  //           },
  //           {
  //             key:'2',
  //             label:'Gray'
  //           },
  //         ]
  //       }
  //     ],

  //   },
  //   {
  //     key: '3',
  //     label:  <a href="/acrilic">Acrilic</a>,

  //   },
  //   {
  //     key: '4',
  //     label: <a href="/charcol">Charcol</a>,

  //   },
  // ]

  return (
    <>
      <div className='flex flex-col min-h-screen '>
        <div className='flex justify-end md:justify-normal'>
          <header className='hidden md:flex bg-lime-700 w-full justify-center items-center h-14 text-white text-xl'>
            <nav className='w-[80%] flex justify-between font-cursive '>
              <Link className='hover:text-purple-200' href="/">Home</Link>
              <Link className='hover:text-purple-200' href="#">About</Link>
              <Link className='hover:text-purple-200' href="#">Contact</Link>
              <Link className='hover:text-purple-200' href="/blog-list">Blog</Link>
              <div className='flex justify-center items-center'>
                <Dropdown menu={{ items, }}>
                  <a href='#' onClick={(e) => e.preventDefault()} className='w-full flex justify-between items-center'>
                    <Space>
                      Category
                    </Space>
                    <FaChevronDown className='p-1 mx-1' />
                  </a>
                </Dropdown>
              </div>
              <Link className='hover:text-purple-200' href="/blogs/create">Create</Link>
              <Link className='hover:text-purple-200' href='/login'>
                <button className='bg-purple-400 px-3 rounded-md shadow-md text-base hover:bg-purple-500 py-0.5'>Login</button></Link>
            </nav>
          </header>

          <FiMenu
            onClick={showDrawer}
            className="cursor-pointer my-2 text-black text-4xl md:hidden m-2 "
          />
          <Drawer
            placement={placement}
            closable={false}
            onClose={onClose}
            open={isSidMenuOpen}
            key={placement}
            styles={{ body: { padding: 0 } }}
          >
            <div className='my-2'>
              <Button onClick={onClose} className='border-none font-bold text-lg'><IoIosArrowBack /> Back</Button>
            </div>
            <div>
              
            <header className=' bg-lime-700 w-full  text-white text-xl'>
            <nav className='p-2 font-cursive'>
              <div className='border-b border-white py-1'>
              <Link className='hover:text-purple-200' href="/">Home</Link>
              </div>
              <div className='border-b border-white py-1'>
              <Link className='hover:text-purple-200' href="#">About</Link>
              </div>
              <div className='border-b border-white py-1'>
              <Link className='hover:text-purple-200' href="#">Contact</Link>
              </div>
            <div className='border-b border-white py-1'>
            <Link className='hover:text-purple-200' href="/blog-list">Blog</Link>
            </div>
              <div className='flex justify-center items-center border-b border-white py-1' >
                <Dropdown menu={{ items, }}>
                  <a href='#' onClick={(e) => e.preventDefault()} className='w-full flex justify-between items-center'>
                    <Space>
                      Category
                    </Space>
                    <FaChevronDown className='p-1 mx-1' />
                  </a>
                </Dropdown>
              </div>
              <div className='border-b border-white py-1'>
              <Link className='hover:text-purple-200' href="/blogs/create">Create</Link>
              </div>
          <div className='py-4'>
          <Link className='hover:text-purple-200' href='/login'>
                <button className='bg-purple-400 px-3 rounded-md shadow-md text-base hover:bg-purple-500 py-0.5'>Login</button>
                </Link>
          </div>
            </nav>
          </header>
            </div>
          </Drawer>
        </div>
        <main className='flex-grow'>
          {children}
        </main>
        <footer className="flex justify-center items-center h-20 bg-gray-800 text-white text-sm">
          <div className="w-[80%] flex justify-between items-center">
            <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <nav className="flex space-x-4">
              <Link className="hover:text-gray-400" href="/">Privacy Policy</Link>
              <Link className="hover:text-gray-400" href="#">Terms of Service</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}
