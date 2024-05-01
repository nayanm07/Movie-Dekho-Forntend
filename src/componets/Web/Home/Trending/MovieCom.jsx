import React from 'react'
import './MovieCom.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addWishListMovie } from '../../../../Services/userApi';

function MovieCom(props) {


    const authStatus = useSelector((state) => state.auth.status);

    const navigate = useNavigate();



  const array = props.data || []

  return (
   <>
    
  

    <div className="mid">
        <div className="content-area" id="trending">
            <h2 className="content-title">{props.heading}</h2>
            <div className="trending-movies-scroller">
              <div className="media-element1">
            {array.map((item , index)=>(
                 <div className="card" style={{
                  backgroundImage: `url('${item.moviePoster}')`,
              }}>
                  <div className="overlay">
                      <h4 className="content-title">{item.movieName}</h4>
                      <p> { new Date(item.releaseDate).getFullYear()} || {item.movieGenres} || {item.movieCertificate} ||{item.movieReating}</p>
                      <div className="button-container">
                          <div className="watch" onClick={() => navigate(`/MovieLand?movieId=${item._id}&genre=${item.movieGenres}`)}>
                              <svg fill="currentColor" viewBox="0 0 16 16">
                                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                              </svg>
                          </div>
                          <div className="queue" onClick={() => {
                    if (!authStatus) {
                        alert("Please Login First");
                        nevigete("/auth")
                    }
                    else{
                      addWishListMovie(item._id)
                    }
                   }}>
                              <svg fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                              </svg>
                          </div>
                          <div className="star queue">
                              <svg fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                          </div>
                          <div className="star queue">
                              <svg fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                              </svg>
                          </div>
                      </div>
                  </div>
              </div>
            ))}
               


            </div>
        </div>
    </div>
    </div>


            
        
   
   </>
  )
}

export default MovieCom