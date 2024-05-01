import React from 'react'
import './benner.css'
import { useNavigate } from 'react-router-dom' 
import { addWishListMovie } from '../../../Services/userApi'
import { useSelector } from 'react-redux'
export const Benner = (props) => {

  const data = props.data || {};
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

 

  function getRendomMOvie(moviearray) {
    const randomIndex = Math.floor(Math.random() * moviearray.length);
    return moviearray[randomIndex];
}

    const randomMovie = getRendomMOvie(data);



    if(!randomMovie){
        return null;
    }


  return (
  <>
   <div className="top mt-10">
            <div className="image-container" style={{
                width: "100%",
                height: "100%",
                display: "flex",
                background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url("${randomMovie.moviePoster ? randomMovie.moviePoster : 'https://via.placeholder.com/500x200' }")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                
            }}>
                <div className="left-side">
                    <h1>{randomMovie.movieName}</h1>
                    <p>{randomMovie.movieAbout}</p>
                 <div className="button-section">
                   <button onClick={() => navigate(`/MovieLand?movieId=${randomMovie._id}&genre=${randomMovie.movieGenres}`)}><i className=" text-white fa-regular fa-circle-play"></i> Watch Movie</button>
                   <button onClick={() => {
                    if (!authStatus) {
                        alert("Please Login First");
                        nevigete("/auth")
                    }
                    else{
                      addWishListMovie(randomMovie._id)
                    }
                   }} ><i class="fa-solid fa-heart text-white"></i> Add Wishlist</button>
                </div>
              </div>
              <div className="right-side">
                  <img src={randomMovie.moviePoster} alt="" />
              </div>

        </div>
     </div>
   </>
  )
}

