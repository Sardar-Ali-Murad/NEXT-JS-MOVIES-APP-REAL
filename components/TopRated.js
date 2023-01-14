import React from 'react'
import styles from "../styles/Rated.module.css"
import { Swiper, SwiperSlide } from "swiper/react";

import Image from 'next/image';
import Link from 'next/link';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
 const Rated=({data})=>{
  return (
    <div className='div-center-80 pb-[50px]'>
    <h2 className={`mb-[40px] ${styles.picks}`}>Top Rated</h2>
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
            576: {
              width: 576,
              slidesPerView: 2,
            },
            450: {
              width: 576,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
          }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
    {
     data.results.map((movie)=>{
         return <SwiperSlide className={`relative md:width-[100%] md:h-[200px] ${styles.swiperSlide}`} >
                 <Image alt="The" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} width={100} height={100} layout="fixed" className={`h-[100%] w-[100%] ${styles.Image} rounded border-red-900 border-solid` }  unoptimized={true} priority  />
                 <div className={styles.text}>
                   <h5>{movie?.original_title}</h5>
                   <p className='text-white'>{movie.overview.slice(0,40)}...</p>
                   <Link href={`/movie/${movie.id}`} shallow={true}>
                     <button className='bg-red-500 text-white p-[6px] w-[190px] h-[50px] mt-[30p] rounded cursor-pointer'>Details</button>
                   </Link>
                 </div>
             </SwiperSlide>
         
     })
    }
   </Swiper>
 </div>
  )
}

export default Rated
