import React from 'react'

import { Link } from 'react-router-dom';


function DashTrending() {
  return (
   <>
    <div className="mb-6 border-b pb-4 ">
        <h1 className="text-2xl font-semibold text-white ml-3">FOR MOVIE</h1>
      </div>
    <div class="container">
     
        <Link to="/dashbord/trending/topMovie">
            <div class="component" id="user">
                <i class="fa-solid text-white fa-film"></i>
                <h2 className=' text-white font-bold'>Top 10</h2>   
            </div>
        </Link>

        <Link to="/dashbord/trending/trendingMovie">
            <div class="component" id="user">
                <i class="fa-solid text-white fa-film"></i>
                <h2 className=' text-white font-bold'>Most Popular</h2>   
            </div>
        </Link>
        
    </div>
    <div className="mb-6 border-b pb-4 ">
        <h1 className="text-2xl font-semibold text-white ml-3">FOR WEB-SHOW</h1>
      </div>
    <div class="container">
     
        <Link to="/dashbord/users">
            <div class="component" id="user">
                <i class="fa-solid fa-video text-white"></i>
                <h2 className=' text-white font-bold'>Top 10</h2>   
            </div>
        </Link>

        <Link to="/trending">
            <div class="component" id="user">
                <i class="fa-solid fa-video text-white"></i>
                <h2 className=' text-white font-bold'>Most Popular</h2>   
            </div>
        </Link>
        
    </div>
   </>
  )
}

export default DashTrending