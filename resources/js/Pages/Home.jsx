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
      name:'Tree Root',
      heading:'Root is the source of green',
      bgColor:'bg-[#ebeae9]'
    },
    {
      id: 2,
      image: '/images/art/water-color/temple.png',
      name:'Temple In Field',
      heading:'Open Your Mind Like Open Sky',
       bgColor:'bg-[#d7d5d1]'
    },
    {
      id: 3,
      image: '/images/art/water-color/swan.png',
      name:'Swan Bird',
      heading:'Free Like the Bird',
       bgColor:'bg-[#fce7e9]'
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
  return (
    <div className='w-full overflow-x-hidden'>
      <Head title={component} />
      <div className='font-crismo w-full h-auto'>
        <Slider {...settings}>
          {topSlider.map((slider) => (
            <div key={slider.id} className={`w-full gap-3 slick-slide items-center justify-center ${slider.bgColor}`}
            // style={{backgroundColor: '#E25173'}}
            >
              <div className='w-1/2'>
                <div className='w-full flex justify-center'>
                  <div className='text-center p-2'>
                  <h1 className='text-4xl font-bold'>{slider.name}</h1>
                  <h2 className='text-6xl py-2'>{slider.heading}</h2>
                  <button className='bg-cyan-500 text-white rounded-full shadow-md h-8 px-2'>Shop Now</button>
                  </div>
                </div>
              </div>
              <div className='w-1/2 p-16'>
                <img src={slider.image} alt={`Slide ${slider.id}`} className="w-full object-cover overflow-hidden" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='flex justify-center my-20'>
        <div className='w-[80%]'>
          <div className="flex text-xl gap-3">
            <div className="w-[30%] overflow-hidden rounded-md hover:cursor-pointer relative" >
              <div className='absolute p-4 inset-0 flex justify-center items-center hover:text-white font-bold hover:bg-black/50 rounded-md'>
                <p>Togor with green leaf</p>
                <button>Shop Now</button>
              </div>
              <img src="/images/random/togor.jpg" alt="" className="w-full h-full object-cover duration-500 hover:scale-105 rounded-md" />
            </div>
            <div className="w-[40%] h-full flex flex-col gap-3">
              <div className="h-1/2 overflow-hidden rounded-md hover:cursor-pointer">
                <img src="/images/random/field_crop.jpg" alt="" className="w-full h-full object-cover rounded-md duration-500 hover:scale-105" />
              </div>
              <div className="h-1/2 overflow-hidden rounded-md hover:cursor-pointer">
                <img src="/images/random/home_ground.jpg" alt="" className="w-full h-full duration-500 hover:scale-105 object-cover rounded-md" />
              </div>
            </div>
            <div className="w-[30%] overflow-hidden rounded-md hover:cursor-pointer">
              <img src="/images/random/joba.jpg" alt="" className="w-full h-full object-cover duration-500 hover:scale-105 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.layout = page => <Layout children={page} />

export default Home