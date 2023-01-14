import React from 'react'
import styles from "../styles/Reviews.module.css"
import Rating from '@mui/material/Rating';


{/* <Image alt="PsterImg"  width={100} src={`https://www.gravatar.com/avatar${author.author_details.avatar_path}`}  height={100} className="w-[50px] h-[50px] object-contain border-r-[50%]"/>                     */}
// let avatar=data[0]?.author_details?.avatar_path.substring(1)


const MovieComment = ({data}) => {
  return (
    <div className='div-center-80'>
        <h1 className={styles.commments}>People Comments</h1>
        {
            data.map((author)=>{
                return <div className={`mt-[40px] ${styles.singleComment}`}>
                    <h1>{author.author_details.name}</h1>
                    <p>{author.content.slice(0,100)}...</p>

                <Rating name="customized-10" className='text-red-700' defaultValue={author.author_details.rating} max={10} />
    
                </div>
            })
        }
    </div>
  )
}

export default MovieComment
