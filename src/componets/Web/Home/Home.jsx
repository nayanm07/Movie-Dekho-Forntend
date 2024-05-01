import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import { Benner } from './Benner';
import TrendingCom from './Trending/TrendingCom';
import MovieCom from './Trending/MovieCom';

function Home() {

  const [topMovies, setTopMovies] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {

      axios.get("/api/v1/getData/getTopMovies")
      .then(response => {
        setTopMovies(response.data.data);
        console.log("ye he ki" +response.data.data);
      })
      .catch(err => {
        console.log(err);
      });


      axios.get("/api/v1/getData/getTrendingMovies")
      .then(response => {
        setTrendingMovies(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });


      axios.get('/api/v1/getData/getMovies')
        .then(response => {

            setMovieData(response.data.data);

        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });

  }, []);




  return (
    <>
      <Benner  data={movieData || []} />
      <TrendingCom data={topMovies || [] } heading={"Top Trending Movies"} />
      <MovieCom  data={ trendingMovies || []} heading={"Popular Movies"} />
      <MovieCom  data={ movieData || []} heading={"Movies"} />
    </>
  )
}

export default Home