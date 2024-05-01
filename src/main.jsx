import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from  'react-redux'
import store from './store/store.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashbord, DashHome, DashMovie, DashTrending, DashUser, Home, Movie, MovieLand, Search, SignIn, SignUp, Start, TopMovie, TrendingMovie, UploadMovie, WatchHistory, WishList } from './componets/index.js'






const  router = createBrowserRouter ([
  {
    path : "/",
    element : <App/>,

    children : [
      {
          path : "/",
          element : <Home/>
      },
      
      {
        path : "/movie",
        element : <Movie/>
      },

      {
        path : "/wishlist",
        element : <WishList/>
      },

      {
        path : "/watchhistory",
        element : <WatchHistory/>
      },

      {
        path : "/search",
        element : <Search/>
      },


      {
        path : "MovieLand",
        element : <MovieLand/>
      },

      {
        path : "/dashbord",
        element : <Dashbord/>,

        children : [{
          path : "/dashbord",
          element : <DashHome/>
        },

        {
            path : "/dashbord/users",
            element : <DashUser/>
        },
 

        {
          path : "/dashbord/movies",
          element: <DashMovie/>,

        },

        {
          path : "/dashbord/movies/uploadmovie",
          element : <UploadMovie/>,
        },

        {
          path : "/dashbord/trending",
          element: <DashTrending/>
        },

        {
          path : "/dashbord/trending/topMovie",
          element: <TopMovie/>
        },

        {
          path : "/dashbord/trending/trendingMovie",
          element: <TrendingMovie/>
        }





      ]}
    ]
  },

  {
    path : "/auth",
    element : <Start/>,

    children : [
      {
        path : "/auth",
        element : <SignIn/>
      },
      {
        path : "/auth/signup",
        element: <SignUp/>
      },

     


    ]
  }

])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
      <RouterProvider router={router} />
   </Provider>,
  
  </React.StrictMode>,
)
