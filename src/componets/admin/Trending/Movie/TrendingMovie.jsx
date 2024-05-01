import React, { useState , useEffect } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table2 from '../table2';

export default function TrendingMovie() {


  const data = {
    rowId : ""
  };

   
  const handleEdit = (rowId) => {
    // Implement edit functionality here
    console.log('Edit row with id:', rowId);
  };

  const addTrending = (rowId) => {

    data.rowId=rowId
    
      axios.post("/api/v1/admin/setTrendingMovie", data )
      .then(response => {
        alert("Add in Top List ")
        //get movie api recall
        window.location.reload();
      })
      .catch(err => {

        if (err.response && err.response.status === 402) {
          alert("This Movie already in Top List")
        }
        else{
          console.log("ye ni to");
        }

        console.log(err);
      })

  };

  const removeTrending = (rowId) => {

    data.rowId=rowId
    
      axios.post("/api/v1/admin/removeTrendingMovie", data )
      .then(response => {
        alert("Add in Top List ")
        //get movie api recal
        window.location.reload();
      })
      .catch(err => {

        
          
        console.log(err);
      })

  };

    const navigate = useNavigate();

    const [trendingMovieData , settrendingMovieData] = useState(null);
    const [movieData, setmovieData] = useState(null);
    const [showModal , setShowModal] = useState(false);


    useEffect(() => {

        const searchBar = document.getElementById('searchBar');
        if (searchBar) {
            searchBar.addEventListener('keyup', function() {
                var searchValue = this.value.toLowerCase();
                var tableRows = document.querySelectorAll("#userTable tbody tr");

                tableRows.forEach(function(row) {
                    var idCell = row.querySelector("td:first-child").textContent.toLowerCase();
                    var emailCell = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
                    if (idCell.indexOf(searchValue) > -1 || emailCell.indexOf(searchValue) > -1) {
                        row.style.display = "";
                    } else {
                        row.style.display = "none";
                    }
                });
            });
        } 
        
        

      //when delete any row then recall api

      


      axios.get('/api/v1/admin/getTrendingMovies')
        .then(response => {

            console.log(response.data.data);
        
          settrendingMovieData(response.data.data);

        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });



        axios.get('/api/v1/admin/getMovies')
        .then(response => {

            // console.log(response);
        
          setmovieData(response.data.data);

        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
  


    }, []);

   

   

  return (
    <>
    <div className="mb-6 border-b pb-4 ">
        <h1 className="text-2xl font-semibold text-white ml-3"> TRENDING MOVIE SECTION</h1>
      </div>
    <div className=" text-right mr-36 mb-5 ">

        <input className=' w-52 p-2 text-sm rounded-md' type="text" id="searchBar" placeholder="Search by Movie Name"  />
        {!showModal && <button onClick={()=> setShowModal(true)}  className='bg-white p-2 font-bold rounded-xl hover:bg-red-700 hover:text-white m-2'>Add Top Movie</button> }
        {showModal && <button onClick={()=> setShowModal(false)}  className='bg-white p-2 font-bold rounded-xl hover:bg-red-700 hover:text-white m-2'>GO Back</button> }

    </div>

      { !showModal && <Table2 headers={[,'id','Movie Name', 'Genres', 'Reating']} data={trendingMovieData || []} remove={removeTrending}   removebt={true} addbt={false}  />}
      { showModal && <Table2 headers={['id','Movie Name', 'Genres', 'Reating']} data={movieData || []} add={addTrending}  removebt={false} addbt={true}  />}

  </>
  )
}