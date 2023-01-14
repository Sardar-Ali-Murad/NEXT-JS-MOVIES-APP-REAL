import React from 'react'
import Image from 'next/image'
import {CiLocationArrow1} from "react-icons/ci"
import {CgCalendarDates}  from "react-icons/cg"
import {FiDollarSign} from "react-icons/fi"
import styles from "../styles/Popular.module.css"
const MovieInfo = ({data}) => {
  return (
    <div className={`div-center-80 mt-[50px] grid-even-2 ${styles.InfoMain}`}>
    <div>
       <h1 className=''>{data.movieData.original_title}</h1>
       <p>{data.movieData.overview}</p>
       <div className='flex gap-[30px] mt-[40px] pb-[30px]'>
           {
            data.movieData.production_companies.map((company)=>{
              return <div>
                   <Image alt="company logo" src={`https://image.tmdb.org/t/p/original/${company?.logo_path}`} width={100} height={100}  />
                </div>
            })
           }
       </div>
       <div className='flex gap-[40px] mt-[40px]'>
         <CiLocationArrow1 className='text-2xl text-red-900'/>
         <h5>{data.movieData.production_countries[0].name}</h5>
       </div>

       <div className='flex gap-[40px] mt-[40px]'>
         <CgCalendarDates className='text-2xl text-red-900'/>
         <h5>{data.movieData.release_date}</h5>
       </div>

       <div className='flex gap-[40px] mt-[40px]'>
         <FiDollarSign className='text-2xl text-red-900'/>
         <h5>{data.movieData.budget}</h5>
       </div>

       <div className='flex gap-[30px] mt-[40px]'>
         <button className='btn p-[10px] bg-red-900' style={{padding:"10px"}}><a href={data.movieData.homepage} target="_blank">See Details</a></button>
         {/* <button className='btn bg-red-500'>See Details</button> */}
       </div>
    </div>

    <div>
        <Image alt="PsterImg" src={`https://image.tmdb.org/t/p/original/${data.movieData?.poster_path}`} width={100} height={100} className="w-[100%] h-[70%] object-contain rounded" unoptimized={true} priority  />
    </div>
 </div>
  )
}

export default MovieInfo
