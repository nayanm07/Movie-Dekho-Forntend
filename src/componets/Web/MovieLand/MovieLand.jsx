import React, { useEffect, useState } from 'react'
import './MovieLand.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import MovieCom from '../Home/Trending/MovieCom'
import VideoPlayer from './Video'
import {useSelector} from 'react-redux'
import { addWatchHistoryMovie, addWishListMovie } from '../../../Services/userApi'


function MovieLand() {

    const nevigete = useNavigate();

    const [trailer, setTrailer] = useState(false)

    const [player , setPlayer] = useState(false)

    const [movie, setMovie] = useState(null) ;

    const [movieWithGenre, setMovieWithGenre] = useState(null)

    const queryParameters = new URLSearchParams(window.location.search)
        const movieId = queryParameters.get("movieId")
        const movieGenre = queryParameters.get("genre")
     


    useEffect (() => {

        
        

        axios.get(`/api/v1/getData/getMovie/${movieId}`)
            .then(response => {
                setMovie(response.data.data)
                setMovieWithGenre(null)
            })
            .catch(err => {
                console.log(err)
            })


        if(movieGenre){
            axios.get(`/api/v1/getData/getMovieWithGenre/${movieGenre}`)
            .then(response => {
                setMovieWithGenre(response.data.data)
            })
            .catch(err => {
                console.log(err)
            
            })
        }

        

    }, [movieId, movieGenre])

    
    const authStatus = useSelector((state) => state.auth.status)


    const a = "https://drive.google.com/file/d/1-1WCorHaAVfOKiH6OAzlHys6CUEtzDZd/view?usp=drivesdk"


  return (
    <>
        <div className="top1 mt-10">
            <div className="image-container1" style={{
                width: "100%",
                height: "100%",
                display: "flex",
                background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(" ${movie && movie.moviePoster ? movie.moviePoster : 'http://res.cloudinary.com/dggcrjjv8/image/upload/v1712252748/fo6r73lppkayepb8lndb.jpg'}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                
            }}>
            {!player && <>
            <div className="left-side1">
                    <h1 className='uppercase' >{movie && movie.movieName}</h1>
                    <p>{movie && movie.movieReating}/10 <i class="fa-solid fa-star text-yellow-500"></i> </p>
                    <p className=' font-bold text-7xl uppercase'> {movie && new Date(movie.releaseDate).getFullYear()} || {movie && movie.movieGenres} || {movie && movie.movieCertificate}  </p>
                    <p>{movie && movie.movieAbout}</p>
                 <div className="button-section1">
                   <button onClick={() => {
                    if (authStatus) {
                        addWatchHistoryMovie(movie._id);
                        setPlayer(true);
                    }
                    else{
                        alert("Please Login First");
                        nevigete("/auth")
                        
                    }
                   }}  > <i className=" text-white fa-regular fa-circle-play"></i> Watch Movie</button>
                   <button  onClick={() => {
                    if (!authStatus) {
                        alert("Please Login First");
                        nevigete("/auth")
                    }
                    else{
                      addWishListMovie(movie._id)
                    } 
                }}><i class="fa-solid fa-heart text-white"></i> Add Wishlist</button>
                </div>
              </div>
              <div className="right-side1" >
                {!trailer  && <div className="poster" style={{ 
                backgroundImage: `url(${movie && movie.moviePoster ? movie.moviePoster : 'http://res.cloudinary.com/dggcrjjv8/image/upload/v1712252748/fo6r73lppkayepb8lndb.jpg'})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "560px",
                height: "315px",
              }}>
                    <button onClick={() => setTrailer(true)} ><i class="fa-solid fa-circle-play text-white scale-150"></i></button>
                </div> }

                {trailer && <div className="trailer">

                <iframe src={movie && movie.trailerLink ? movie.trailerLink : "http://www.youtube.com/embed/wS_qbDztgVY?yt:stretch=16:9&vq=hd720p&autoplay=1&loop=0&color=red&iv_load_policy=3&rel=0&showinfo=0&autohide=1&controls=0&autoplay=1"} width="560" height="315" allowtransparency="true" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>

                </div>
                    }

              </div>

            </>  }

            {player && <>
                <button onClick={ () => setPlayer(false) } className='fixed top-5 right-3 z-10 ' style={{zIndex:10}}><i class="fa-solid fa-xmark text-white hover:text-red-500 scale-150"> </i></button>
                <VideoPlayer poster={ movie.moviePoster} movie={ movie.movieLink ?  a : movie.movieFile[0]} />
            </>}

            
                
        </div>
     </div>

     {movieWithGenre && <MovieCom  data={movieWithGenre || []} heading="Similar Movies" /> }


    </>
  )
}

export default MovieLand

