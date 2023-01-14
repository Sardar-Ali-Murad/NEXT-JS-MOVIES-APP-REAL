import React from 'react'
// import  { useRouter } from 'next/router'
import MovieComment from '../../components/MovieComment'
import MovieInfo from '../../components/MovieInfo'
import ReleatedMovies from '../../components/ReleatedMovies'
import MovieVedios from '../../components/MovieVedios'
import RecommendedMovies from '../../components/RecommendedMovies'

const Movie = (data) => {
  // let router=useRouter()
  // let {id}=router.query
  return (
    <div>
        <MovieInfo data={data}/>
        <MovieVedios data={data.Vedios.results}/>
        <MovieComment data={data.reviews.results}/>
        <ReleatedMovies data={data.Releated.results}/>
        <RecommendedMovies data={data.Suggested.results}/>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US&page=1')
  const movies = await res.json()

  let rated=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US&page=1")

  let fetchdata=await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e")
  let Trending=await fetchdata.json()


  let TopRated=await rated.json()  

  const paths = movies.results.map((user) => ({
    params: { id: user.id.toString()},
  }))


  const pathsRated = TopRated.results.map((user) => ({
    params: { id: user.id.toString()},
  }))

  const TrendingMovies = Trending.results.map((user) => ({
    params: { id: user.id.toString()},
  }))

  return { paths:[...paths,...pathsRated,...TrendingMovies], fallback: false }
}


// export async function getServerSideProps(props) {
//   // console.log(props.params)
//   const data1 = await fetch(`https://api.themoviedb.org/3/movie/${props.query.id}?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US`)
//   const movieData = await data1.json()

//   // Movie Review
//   const data2 = await fetch(`https://api.themoviedb.org/3/movie/${props.query.id}/reviews?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US`)
//   const Reviews = await data2.json()

//   // Similar Movies
//   const data3 = await fetch(`https://api.themoviedb.org/3/movie/${props.query.id}/similar?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US`)
//   const SimilarMovies = await data3.json()

//   // Movie Vedios
//   const data4 = await fetch(`https://api.themoviedb.org/3/movie/${props.query.id}/videos?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US`)
//   const MovieVedios = await data4.json()

//   const data5 = await fetch(`https://api.themoviedb.org/3/movie/${props.query.id}/recommendations?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US`)
//   const Recommended = await data5.json()

  
//   return { props: { movieData:movieData, reviews:Reviews,Releated:SimilarMovies,Vedios:MovieVedios,Suggested:Recommended } }
// }




// By using the getStaticProps

export async function getStaticProps(props) {
  // console.log(props.params)
  const data1 = await fetch(`https://api.themoviedb.org/3/movie/${props.params.id}?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US`)
  const movieData = await data1.json()

  // Movie Review
  const data2 = await fetch(`https://api.themoviedb.org/3/movie/${props.params.id}/reviews?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US`)
  const Reviews = await data2.json()

  // Similar Movies
  const data3 = await fetch(`https://api.themoviedb.org/3/movie/${props.params.id}/similar?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US`)
  const SimilarMovies = await data3.json()

  // Movie Vedios
  const data4 = await fetch(`https://api.themoviedb.org/3/movie/${props.params.id}/videos?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US`)
  const MovieVedios = await data4.json()

  const data5 = await fetch(`https://api.themoviedb.org/3/movie/${props.params.id}/recommendations?api_key=772fdc000f9ae1b2a3ee1abb1f68a57e&language=en-US`)
  const Recommended = await data5.json()

  
  return { props: { movieData:movieData, reviews:Reviews,Releated:SimilarMovies,Vedios:MovieVedios,Suggested:Recommended } }
}


export default Movie
