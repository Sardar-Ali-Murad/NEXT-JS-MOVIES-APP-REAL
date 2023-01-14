import React from 'react'
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';


// import required modules
import { Pagination } from "swiper";
import styles from "../styles/Popular.module.css"


const MoviesCarosel = ({data}) => {
    
  return (
    <div className='div-center-80 pb-[50px]'>

       <h2 className={`mb-[40px] ${styles.picks}`}>Top Picks For You</h2>
       <Swiper
        // slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination]}
        className={styles.mySwiper}
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 2,
          },
          450: {
            width: 450,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
      >
       {
        data.results.map((movie)=>{
            return(
           
              <SwiperSlide className={`relative md:width-[100%] md:h-[200px] ${styles.swiperSlide}`} >
                    <Image alt="The" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} width={100} height={100} layout="fixed" className={`h-[100%] w-[100%] ${styles.Image} rounded border-red-900 border-solid` }  unoptimized={true} priority  />
                    <div className={styles.text}>
                      <h5>{movie?.original_title}</h5>
                      <p className='text-white'>{movie.overview.slice(0,40)}...</p>
                        <Link href={`/movie/${movie.id}`} shallow>
                          <button className='bg-red-500 text-white p-[6px] w-[190px] h-[50px] mt-[30p] rounded cursor-pointer'>Details</button>
                        </Link>
                    </div>
                </SwiperSlide>
            )
                
              })
            }
            </Swiper>
    </div>
  )
}

export default MoviesCarosel
