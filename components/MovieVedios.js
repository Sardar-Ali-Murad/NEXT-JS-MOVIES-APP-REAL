import React from 'react'

const MovieVedios = ({data}) => {
  return (
    <div className='div-center-80 grid-22 mt-[50px] pb-[50px]'>
      {
        data.map((movie)=>{
            return <div>
              <iframe style={{width:"100%",height:"100%"}} className='video'
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={`https://youtube.com/embed/${movie.key}?autoplay=0`}>
         </iframe>

            </div>
        })
      }
    </div>
  )
}

export default MovieVedios
