import React, { useState , useEffect } from 'react'
import Table from '../table'
import axios from 'axios';



function DashUser() {

  const data = {
    rowId : ""
  };

   
  const handleEdit = (rowId) => {
    // Implement edit functionality here
    console.log('Edit row with id:', rowId);
  };

  const handleDelete = (rowId) => {

    data.rowId=rowId
    
      axios.post("/api/v1/admin/deleteUser", data )
      .then(response => {
        alert("row delete sucessfully")
        
      })
      .catch(err => {
        console.log(err);
      })

    console.log('Delete row with id:', rowId);
  };




    const [userData, setUserData] = useState(null);

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
          


        axios.get('/api/v1/admin/getUser')
          .then(response => {
          
            setUserData(response.data.data);

          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      }, []);

  return (
    <>
    <div className="mb-6 border-b pb-4 ">
        <h1 className="text-2xl font-semibold text-white ml-3">USER SECTION</h1>
      </div>
    <div className=" text-right mr-36 mb-5 ">

        <input className=' w-52 p-2 text-sm rounded-md' type="text" id="searchBar" placeholder="Search by ID or Email..."  />
        <button className=' bg-white p-2 font-bold rounded-xl hover:bg-red-700 hover:text-white m-2'>Add User</button>
    </div>
    <Table
    headers={['ID','Email', 'Name', 'Is-Admin']}
    data={userData || []}
    handleDelete={handleDelete}
    handleEdit={handleEdit}
  />
  </>
  )
}

export default DashUser