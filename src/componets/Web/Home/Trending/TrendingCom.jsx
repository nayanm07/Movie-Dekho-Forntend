import React from 'react'
import './TrendingCom.css'
import { useNavigate } from 'react-router-dom'

function TrendingCom(props) {

  const navigate = useNavigate();

    const array = props.data || []
  return (
    <>
     <div className="mid">
        <div className="content-area" id="trending">
            <h2 className="content-title">{props.heading}</h2>
    <div className="trending-movies-scroller">
      <div className="media-element">

        {array.map((item, index) => (
            <div className="media-container" key={index} onClick={() => navigate(`/MovieLand?movieId=${item._id}&genre=${item.movieGenres}`)}>
            <img src={item.moviePoster} alt="media-thumbnail" className="media-thumbnail" 
            onMouseOver={() => document.getElementById(`${item.movieName}-${item.movieGenres}`).style.visibility = "visible"} 
            onMouseOut={() => document.getElementById(`${item.movieName}-${item.movieGenres}`).style.visibility = "hidden"}/>
            <p className="rank">{index + 1}</p>
            
            </div>
        ))}

            



            
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default TrendingCom