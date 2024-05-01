import React, { useEffect } from 'react';
import './desh.css';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Outlet, Navigate } from 'react-router-dom';
import DashHome from '../Home/home';
import DashUser from '../User/DashUser';
import DashMovie from '../Movie/DashMovie';
import UploadMovie from '../Movie/Movieform';
import DashTrending from '../Trending/Trending';

function Dashbord() {
  const userData = useSelector(state => state.auth.userData);
  const isAdmin = userData && userData.isAdmin;

  console.log(isAdmin);

  useEffect(() => {
    // You can do additional logic here if needed
  }, []);

  if (!userData) {
    return <Navigate to="/" />;
  }



  if (isAdmin) {
    return (
      <>
        <div className="wrapper">
          <div className="sidebar">
            <h2></h2>
            <ul>
              <li><Link to=""><i className="fas fa-home"></i>Home</Link></li>
              <li><Link to="/dashbord/users"><i className="fas fa-user"></i>User</Link></li>
              <li><Link to="/dashbord/movies"><i className="fas fa-film"></i>Movies</Link></li>
              <li><Link to="/web-show"><i className="fas fa-video"></i>Web-Show</Link></li>
              <li><Link to="/dashbord/trending"><i className="fas fa-chart-line"></i>Trending</Link></li>
            </ul> 
          </div>
          <div className="main_content">
            <Outlet/>
          </div>
        </div>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default Dashbord;
