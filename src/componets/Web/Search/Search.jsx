import axios from 'axios';
import React, { useState, useEffect } from 'react';
import GridMovie from '../WishList/GridMovie';

function Search() {

    const [query, setQuery] = useState(new URLSearchParams(window.location.search).get("query"));
    const [searchData, setSearchData] = useState(null);
    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search);
        const query1 = queryParameters.get("query");
        if(query1!=query){
            setQuery(query1);
        }
    }, [window.location.search]);

    useEffect(() => {
        axios.get(`/api/v1/getData/search/?query=${query}`)
            .then(response => {
                
                setSearchData(response.data.data);
            })  
            .catch(err => {
                console.log(err);
            })

            console.log(searchData);
    }, []);


  return (
   <>
    <div className="mb-6 border-b pb-4 mt-20">
        <h1 className="text-2xl font-semibold text-white ml-3">{query}</h1>
      </div>
      <GridMovie  data={searchData} />
   </>
  )
}

export default Search

