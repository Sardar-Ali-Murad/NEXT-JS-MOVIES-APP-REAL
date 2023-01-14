import React from 'react'
import { useAppContext } from '../../context/state'
import useSWR from 'swr'
import Image from 'next/image'
import styles from "../../styles/Popular.module.css"


const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const search = (props) => {
  let {searchValue,value}=useAppContext()
  let [movies,setMovies]=React.useState([])

    const { data, error } = useSWR(`https://api.themoviedb.org/3/search/movie?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US&page=1&include_adult=false&query=${searchValue}`, fetcher)
    console.log(data)

    
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  if(data.results.length<1){
    return <p>No data find with your preference!</p>
  }

 
    return (
      <div className='div-center-80 grid-16'>
      {
        data?.results?.map((movie)=>{
         return(
          <div >
           <Image alt="The" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} width={100} height={60} layout="fixed" className={`h-[25%] w-[64%]  rounded border-red-900 border-solid` }  unoptimized={true} priority  />
             <h3>{movie?.original_title}</h3> 
             <p>{movie?.overview.slice(0,300)}...</p>
          </div>
           ) 
        })
      }
    </div>
  )
}



export default search
