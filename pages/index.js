
import styles from "../styles/Navbar.module.css"
import Logo from "../assets/images/logo2.png"
import Image from 'next/image'
import Rating from '@mui/material/Rating';

import { Swiper, SwiperSlide } from "swiper/react";
import Rated from "../components/TopRated"
import Link from "next/link";
import {useAppContext} from "../context/state"


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import PopularCarosel from "../components/PopularCarosel";


const FrontPage = ({Data,popular,topRated}) => {
    let props =useAppContext()
     console.log(props)
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className={styles.mySwiper}>
  {
    Data?.results.map((data)=>{
      return <SwiperSlide className="w-[200px]">
      <div className='div-center-80 lg:flex-row mt-[70px]  py-[40px] ' id={styles.indexMain}>
  
  
        <div className={styles.indexText}>
          <div className={`h-[100px] w-[170px] bg-red-300 ${styles.netflixBox} `}>
             <Image alt="Logi Image" src={Logo} className="h-[60px] w-[60px] object-contain"  unoptimized={true} priority />
          </div>
          <h3 className="mt-[40px] text-white">{data.title}</h3>
          <p className="w-[100%] text-red-300 lg:text-2xl p-[10px]  md:text-1xl">{data.overview}</p>
          <div className="mt-[30px]">
            <Rating name="size-large" className="text-red-800" defaultValue={data.vote_average} size="large" max={10} />
        <p className="mt-[4px] ml-[20px]"><span className="text-white">{data.vote_average}(IMDB)</span></p>
          </div>
  
          <div className="relative">
          <Link href={`/movie/${data.id}`}>
            <button className="bg-red-700 text-white p-[20px] w-[200px] mt-[30px] rounded ">Details</button>
            </Link>
          </div>
     
        </div>
  
        <div>
           <Image alt="The" src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} width={376} height={190} layout="fixed" className={styles.Image} />
        </div>
          
  
      </div>
    </SwiperSlide>
    })
  }
      </Swiper>

      {/* The Popular and the most rated one */}
      <PopularCarosel data={popular}/>
      
      {/* The Top Rated Stuff */}
      <Rated data={topRated}/>

  </>
  )
}


// The Api Call Stuff
export const getStaticProps = async () => {
  // Trending
  let fetchdata=await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e")
  let data=await fetchdata.json()
  // For the Most Popular Movies
  let popular=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US&page=1")
  let data2=await popular.json()
  
  // Top Rated
  let rated=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US&page=1")
  let data3=await rated.json()
    return {
      props: {
        Data: data,
        popular:data2,
        topRated:data3
      },
    };
  };

export default FrontPage
