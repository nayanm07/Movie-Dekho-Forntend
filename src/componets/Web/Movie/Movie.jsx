import React from 'react'
import MovieCom from '../Home/Trending/MovieCom';
import axios from 'axios';

function Movie() {

    const [movieData, setMovieData] = React.useState(null);

    React.useEffect(() => {   
        axios.get('/api/v1/getData/getMovies')
        .then(response => {

            setMovieData(response.data.data);

        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });

    }, []);



  const genres = ["action","comedy","horror","romance","thriller","anime"]

  const movieList = genres.map((genre,index)=>{

    const data = movieData?.filter((movie) => movie.movieGenres.includes(genre));

    if(data?.length){

      return <>

      {data && <div key={index} className="mt-16">

        <MovieCom data={data} heading={genre} />

       </div>
       }

       </>

    }else{

      return null;

    }


  })


  return (
    <>
    
    {movieList}

    </>
  )
}

export default Movie


