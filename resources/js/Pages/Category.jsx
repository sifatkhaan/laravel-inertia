
import { Link, usePage } from '@inertiajs/react'
import CategoryFilters from '../components/CategoryFilters';
import { Drawer, Button } from 'antd';
import { IoIosArrowBack } from "react-icons/io";
import { FiMenu } from 'react-icons/fi';
import { FaFilter } from "react-icons/fa";
import { useState } from 'react';

export default function Category({ filters, items, category }) {
  const { categories } = usePage().props
  const currentCategoryId = window.location.pathname.split('/')[2];
  const [placement, setPlacement] = useState('left');
  const [isSidMenuOpen, setIsSideMenuOpen] = useState(false);

  const showDrawer = () => {
    setIsSideMenuOpen(true);
  };
  const onClose = () => {
    setIsSideMenuOpen(false);
  };


  return (
    <div className='w-full flex justify-center my-0 md:my-10'>
      <div className='w-full md:w-[90%] px-2'>
        <div className='w-full block md:flex justify-between gap-2 md:gap-5'>
          {/* <CiFilter
            onClick={showDrawer}
            className="cursor-pointer my-2 text-black text-4xl md:hidden m-2 bg-blue-400 w-8"
          /> */}
          <div className='md:hidden pb-2'>
            <Button className='bg-blue-400 text-white' onClick={showDrawer}><FaFilter className='text-white' />Filter</Button>
          </div>
          <div className='hidden md:block w-[30%] bg-lime-100 rounded-md p-3 shadow-md'>
            <div className='w-full'>
              {/* <h2>Side Bar</h2> */}
              <div>
                {categories?.map((cat, index) => (
                  <Link href={`/category/${cat.id}`} key={index} >
                    <p
                      className={`px-2 py-1 my-2 gap-2 w-2/3 rounded-sm shadow-sm text-gray-700 ${currentCategoryId == cat.id ? 'bg-green-600 text-yellow-50' : 'bg-lime-300 hover:bg-green-600 hover:text-yellow-50'}`}
                    >{cat.name}</p>
                  </Link>
                ))}
              </div>
            </div>
            <CategoryFilters filters={filters} categoryId={category.id} />
          </div>
          <div className='w-full md:w-[70%] bg-[#fff6f6e6] rounded-md p-1 md:p-3 shadow-md'>
            {/* <h1>Body</h1> */}
            <div className='grid grid-cols-2 justify-between gap-2 md:gap-5'>
              {items.data?.map((item, index) => (
                <div key={index} className='p-3 bg-white rounded-sm shadow-md  duration-500 hover:scale-105'>
                  <div className="w-full md:w-[95%] flex flex-col">
                    <Link href={`/items/${item.id}`}>
                      <img
                        src={`${item.image}`}
                        alt=""
                        className="w-full h-auto object-cover rounded-md"
                      />
                    </Link>
                  </div>
                  <div className='pt-2 text-center'>
                    <h1 className='font-cursive text-lg text-center'>{item.name}</h1>
                    <p>৳ {item.price}</p>
                    {/* <p>{item.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='my-2 py-2'>
          {items.links.map(link => (
            link.url ? (
              <Link
                key={link.label}
                href={link.url}
                dangerouslySetInnerHTML={{ __html: link.label }}
                className={`p-1 mx-2 px-2 hover:bg-gray-100 rounded-md ${link.active ? 'text-blue-400 font-bold bg-gray-100 rounded-md' : ''}`}
              />
            ) : (<span
              key={link.label}
              dangerouslySetInnerHTML={{ __html: link.label }}
              className='p-1 mx-2 text-gray-400'>
            </span>)
          ))}
        </div>
      </div>

      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={isSidMenuOpen}
        key={placement}
        styles={{ body: { padding: 0 } }}
        width={window.innerWidth * 0.8}
      >
        <div className='my-2'>
          <Button onClick={onClose} className='border-none font-bold text-lg'><IoIosArrowBack /> Back</Button>
        </div>

        <div className=' bg-lime-100 rounded-md p-3 shadow-md'>
          <div className='w-full'>
            {/* <h2>Side Bar</h2> */}
            <div>
              {categories?.map((cat, index) => (
                <Link href={`/category/${cat.id}`} key={index} >
                  <p
                    className={`px-2 py-1 my-2 gap-2 w-2/3 rounded-sm shadow-sm text-gray-700 ${currentCategoryId == cat.id ? 'bg-green-600 text-yellow-50' : 'bg-lime-300 hover:bg-green-600 hover:text-yellow-50'}`}
                  >{cat.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <CategoryFilters filters={filters} categoryId={category.id} />
        </div>
      </Drawer>
    </div>
  )
}
