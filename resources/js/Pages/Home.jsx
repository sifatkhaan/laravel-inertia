import React  from 'react'
import { Head, Link } from '@inertiajs/react'
import Slider from 'react-slick';
import {useRoute} from "../../../vendor/tightenco/ziggy"
import Layout from '../Layouts/Layout';
function Home() {
const router = useRoute()
  const topSlider = [
    {
      id: 1,
      image: '/images/person/1716946671185.jpg'
    },
    {
      id: 2,
      image: '/images/person/resized_sari.jpg'
    },
    {
      id: 3,
      image: '/images/person/trisha.png'
    },
    {
      id: 4,
      image: '/images/person/convocation_family.jpg'
    },
    {
      id: 5,
      image: '/images/person/srijon-mom.png'
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
  };
  return (
    <div className='w-full overflow-x-hidden'>
      <Head>
        <title></title>
      </Head>
      <div className='font-crismo w-full h-auto '>
        <Slider {...settings}>
          {topSlider.map((slider) => (
            <div key={slider.id}>
              <img src={slider.image} alt={`Slide ${slider.id}`} className="w-full object-cover overflow-hidden" />
            </div>
          ))}
        </Slider>
      </div>
      <div className='flex justify-center my-20'>
        <div className='w-[80%]'>
          <div className="flex text-xl gap-3">
            <div className="w-[30%] overflow-hidden rounded-md" >
              <img src="/images/random/togor.jpg" alt="" className="w-full h-full object-cover duration-500 hover:scale-105 rounded-md" />
            </div>
            <div className="w-[40%] h-full flex flex-col gap-3">
              <div className="h-1/2 overflow-hidden rounded-md">
                <img src="/images/random/field_crop.jpg" alt="" className="w-full h-full object-cover rounded-md duration-500 hover:scale-105" />
              </div>
              <div className="h-1/2 overflow-hidden rounded-md">
                <img src="/images/random/home_ground.jpg" alt="" className="w-full h-full duration-500 hover:scale-105 object-cover rounded-md" />
              </div>
            </div>
            <div className="w-[30%] overflow-hidden rounded-md">
              <img src="/images/random/joba.jpg" alt="" className="w-full h-full object-cover duration-500 hover:scale-105 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.layout = page => <Layout children={page}/>

export default Home