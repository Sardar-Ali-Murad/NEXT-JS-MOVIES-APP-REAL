import Link from "next/link"
import Logo from "../assets/images/logo2.png"
import Image from "next/image"
import styles from  "../styles/Navbar.module.css"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineClose}  from "react-icons/ai"
import {GiHamburgerMenu}  from "react-icons/gi"
import React, { useState } from 'react';
import { useAppContext } from "../context/state"


const Navbar = () => {
  let {searchValue,value,movieHandler,callMovies}=useAppContext()
  let [sideBar,setSideBar]=React.useState(false)
let [movies,setMovies]=React.useState([])

 const  formHandler=async (e)=>{
    e.preventDefault()
    let data=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US&page=1&include_adult=false&query=${searchValue}`)
    let jsonData=await data.json()
    callMovies(jsonData.results)
  }

  return (
    <div>

    <div className="flex content-evenly" id={styles.navMain}>
      {/*  */}
      <div>
        {value}
         <Image src={Logo} className={styles.Logo} />
      </div>
      {/*  */}
        <div className={`relative lg:block  outline-none ${styles.searchBox}`} > 
        <form onSubmit={formHandler}>

           <input placeholder="Search movie name from here" className="text-1xl roboto w-[300px] p-[10px]" value={searchValue} onChange={(e)=>value(e.target.value)}/>
            <div className="bg-red-500 w-[40px] p-[10px] flex absolute top-0 right-0 h-[48px] justify-content-center items-center">
                <AiOutlineSearch/>
        </div>
        </form>
      {/*  */}
      {/*  */}
       <nav>
         <ul>
            <li><Link href="/" className="hover:text-red-400 lg:text-[20px] md:text-[16px] roboto">Home</Link></li>
            <li><Link href="/movie/search" className="hover:text-red-400 lg:text-[20px] md:text-[16px] roboto">Search Movies</Link></li>
            {/* <li><Link href="/shows" className="hover:text-red-400 lg:text-[20px] md:text-[16px] roboto">Tv Shows</Link></li> */}
            {/* <li><Link href="/pages" className="hover:text-red-400 lg:text-[20px] md:text-[16px] roboto">Pages</Link></li> */}
         </ul>
       </nav>

       <GiHamburgerMenu className="cursor-pointer text-3xl" id={styles.ham} onClick={()=>setSideBar(true)}/>
      
       {/*  */}
    </div>

       {/* The Sidebar */}

       <div className={`${styles.sidebarMain} ${!sideBar?"transform translate-x-[200px]":"transform translate-x-[0px]"} transition ease-in-out `}>
        <AiOutlineClose onClick={()=>setSideBar(false)} className="absolute top-[20px] right-[20px] cursor-pointer text-4xl"/>
        <nav>
         <ul>
            <li><Link href="/" className="hover:text-red-400 text-[25px]  roboto">Home</Link></li>
            <li><Link href="/movie/search" className="hover:text-red-400 text-[25px] roboto">Search Movies</Link></li>
            {/* <li><Link href="/shows" className="hover:text-red-400 text-[25px] roboto">Tv Shows</Link></li> */}
            {/* <li><Link href="/pages" className="hover:text-red-400 text-[25px] roboto">Pages</Link></li> */}
         </ul>
       </nav>
    </div>
    </div>
    </div>
  )
}

export default Navbar
