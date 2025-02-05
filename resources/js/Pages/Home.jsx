import React from 'react'
import { Head, Link, usePage } from '@inertiajs/react'
import Slider from 'react-slick';
// import {useRoute} from "../../../vendor/tightenco/ziggy"
import Layout from '../Layouts/Layout';
function Home() {
  // const router = useRoute();
  const { component } = usePage()

  const topSlider = [
    {
      id: 1,
      image: '/images/art/water-color/tree-root.png',
      name: 'Tree Root',
      heading: 'Root is the source of green',
      bgColor: 'bg-[#ebeae9]'
    },
    {
      id: 2,
      image: '/images/art/water-color/temple.png',
      name: 'Temple In Field',
      heading: 'Open Your Mind Like Open Sky',
      bgColor: 'bg-[#d7d5d1]'
    },
    {
      id: 3,
      image: '/images/art/water-color/swan.png',
      name: 'Swan Bird',
      heading: 'Free Like the Bird',
      bgColor: 'bg-[#fce7e9]'
    },

  ]

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Center the slides
    centerPadding: "0px",
  };

  const homeCategory = [
    {
      id: 1,
      itemName: '',
      itemId: '',
      categoryCode: 1,
      categroyName: '',
      regularPrice: 10,
      discountPrice: 8,
      isSlider: true,
      bgColor: '',
      heading: '',


    }
  ]
  return (
    <div className='w-full overflow-x-hidden'>
      <Head title={component} />
      <div className='font-crismo w-full h-auto'>
        <Slider {...settings}>
          {topSlider.map((slider) => (
            <div key={slider.id} className={`relative w-full gap-3 slick-slide items-center justify-center ${slider.bgColor}`}
            // style={{backgroundColor: '#E25173'}}
            >
              <div className='w-full md:w-1/2 absolute md:relative top-0 left-0 flex items-center justify-center h-full bg-black/50 md:bg-transparent'>
                <div className='w-full flex justify-center'>
                  <div className='text-center p-2'>
                    <h1 className='text-4xl font-bold'>{slider.name}</h1>
                    <h2 className='text-6xl py-2'>{slider.heading}</h2>
                    <button className='bg-cyan-500 text-white rounded-full shadow-md h-8 px-2'>Shop Now</button>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 p-2 md:p-16'>
                <img src={slider.image} alt={`Slide ${slider.id}`} className="w-full object-cover overflow-hidden" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='flex justify-center my-10 md:my-20'>
        <div className='w-full p-2 md:p-0 md:w-[80%]'>
          <div className="block md:flex text-xl gap-3 ">
            <div className="w-full md:w-[30%] overflow-hidden rounded-md hover:cursor-pointer relative my-2 md:my-0" >
              <div className='absolute p-4 inset-0 flex justify-center text-gray-600 hover:text-white font-bold hover:bg-black/50 rounded-md'>
                <div className='text-center my-10 font-noto'>
                  <p className='my-5'>Togor with green leaf</p>
                  <button className='bg-lime-600 p-1 rounded-full shadow-md px-4 text-yellow-100 duration-500 hover:scale-110'>Shop Now</button>
                </div>
              </div>
              <img src="/images/random/togor.jpg" alt="" className="w-full h-full object-cover duration-500 hover:scale-105 rounded-md" />
            </div>
            <div className="w-full md:w-[40%] h-full flex flex-col gap-3">
              <div className="h-1/2 overflow-hidden rounded-md hover:cursor-pointer relative">
                <div className='flex justify-center items-end absolute pb-12 inset-0 text-orange-900 hover:text-white font-bold hover:bg-black/50 rounded-md '>
                  <div className='text-center font-noto'>
                    <p className='my-1'>Temple In Field</p>
                    <button className='bg-lime-600 p-1 rounded-full shadow-md px-2 text-yellow-100 text-base duration-500 hover:scale-110'>Shop Now</button>
                  </div>
                </div>
                <img src="/images/random/field_crop.jpg" alt="" className="w-full h-full object-cover rounded-md duration-500 hover:scale-105" />
              </div>
              <div className="h-1/2 overflow-hidden rounded-md hover:cursor-pointer relative">
                <div className='flex justify-center items-end absolute pb-12 inset-0 text-yellow-800 hover:text-white font-bold hover:bg-black/50 rounded-md '>
                  <div className='text-center font-noto'>
                    <p className='my-1'>Sweet Home</p>
                    <button className='bg-lime-600 p-1 rounded-full shadow-md px-2 text-yellow-100 text-base duration-500 hover:scale-110'>Shop Now</button>
                  </div>
                </div>
                <img src="/images/random/home_ground.jpg" alt="" className="w-full h-full duration-500 hover:scale-105 object-cover rounded-md" />
              </div>
            </div>
            <div className="w-full md:w-[30%] my-2 md:my-0 overflow-hidden rounded-md hover:cursor-pointer relative">
              <div className='flex justify-center items-center absolute p-2 inset-0 text-red-600 hover:text-white font-bold hover:bg-black/50 rounded-md '>
                <div className='text-center font-noto'>
                  <p className='my-1'>Hanging Flowers</p>
                  <button className='bg-lime-600 p-1 rounded-full shadow-md px-4 text-yellow-100 opacity-80 duration-500 hover:scale-110'>Shop Now</button>
                </div>
              </div>
              <img src="/images/random/joba.jpg" alt="" className="w-full h-full object-cover duration-500 hover:scale-105 rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-green-200 relative'>
        <div className='flex justify-center items-end p-4 absolute inset-0'>
          <p className='font-cursive text-3xl md:text-7xl text-white opacity-60'>Art is the Expression of Your Soul</p>
        </div>
        <img src='/images/art/water-color/banner_sari.png' alt='banner' className="w-full object-cover overflow-hidden" />
      </div>
      <div className='w-full grid grid-cols-4 gap-4 p-2 my-10 h-12 font-noto text-lg md:text-2xl text-gray-600'>
        <div className=' border-r-2 border-gray-600'>Borno Bilas</div>
        <div className=' border-r-2 border-gray-600'>My Account</div>
        <div className=' border-r-2 border-gray-600'>Conttact Us</div>
        <div>News Letter</div>
      </div>
    </div>
  )
}

Home.layout = page => <Layout children={page} />

export default Home