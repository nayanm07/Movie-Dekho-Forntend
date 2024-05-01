import React, { useState } from "react";
import axios, { all } from "axios";
import { useNavigate } from "react-router-dom";


export default function UploadMovie() {

  const navigate = useNavigate();

  const [moviePoster, setImageFile] = useState(null);


//upload movie

const [movieData, setMovieData] = useState({
  movieName: "", 
  movieGenres: "", 
  movieReating: 0, 
  movieAbout: "", 
  numMovie: 0, 
  trailerLink: "", 
  movieLink: "",
  releaseDate: "",
  movieCertificate: ""

});

const handleChange = (e) => {
  const { name, value } = e.target;
  setMovieData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};



const handleMovieUpload = () => {

  if (Object.values(movieData).some(value => value === "")) {
    alert("Please fill in all fields before uploading the movie.");
    return;
  }

  if (!moviePoster)
  {
    alert("Poster fill in all fields before uploading the movie.");
    return;
  }

  const formData = new FormData();

  for (const key in movieData) {
    formData.append(key, movieData[key]);
  }


  formData.append('moviePoster', moviePoster);


    axios.post("/api/v1/admin/uploadMovie", formData)
    .then( res => {
       console.log(res);
       alert("Movie Successfully uploaded")

       navigate("/dashbord/movies")

    })
    .catch (err => {
      console.log(err)
    })

}






  
// Function to handle file selection
const handleFileChange = (e) => {
  const file = e.target.files[0];
  setImageFile(file);

  // Optional: You can also preview the selected image before uploading
  const reader = new FileReader();
  reader.onload = (event) => {
    document.getElementById('preview-image').src = event.target.result;
  };
  reader.readAsDataURL(file);
};


const [videoFiles, setVideoFiles] = useState([]);

const handleVideoFileChange = (e, index) => {
  const file = e.target.files[0];
  let updatedFiles = [...videoFiles];
  updatedFiles[index] = file;
  setVideoFiles(updatedFiles);
};

const handleNumberOfMoviesChange = (e) => {
  const numMovies = parseInt(e.target.value);
  const newFiles = new Array(numMovies).fill(null);
  setVideoFiles(newFiles);
};







  return (
    <div className="bg-black p-8">
      <div className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-semibold text-white">Add New Movie</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <div className="mb-4">
            <img
              id="preview-image"
              alt="Series thumbnail"
              className="mb-2"
              height="144"
              src={moviePoster ? URL.createObjectURL(moviePoster) : 'https://via.placeholder.com/256x144'}              style={{
                aspectRatio: "256/144",
                objectFit: "cover",
              }}
              width="256"
            />
           
          <input className="text-red-500 font-bold rounded-lg mt-2 hover:text-white border-red-500" type="file" name="" id="" onChange={handleFileChange} />

            
          </div>
          <div>
            <h2 className="mb-2 font-semibold text-white">Movie Genres</h2>
            <select id="Genres" className="text-white p-2 w-full rounded-xl bg-red-600" value={movieData.movieGenres} onChange={handleChange} name="movieGenres">
            <option value="genres">Genres</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="thriller">Thriller</option>
              <option value="anime">Anime</option>
            </select>
          </div>
 
          <div>
            <h2 className="mb-2 mt-4 font-semibold text-white">Movie Certificate</h2>
            <select id="pricing" className="text-white  p-2 w-full rounded-xl bg-red-600" value={movieData.movieCertificate} onChange={handleChange} name="movieCertificate" >
            <option value="">select</option>
              <option value="U">U - unrestricted</option>
              <option value="UA">UA - parental discretion</option>
              <option value="A">A - adult.</option>
              <option value="S">S -  special class </option>
            </select>
          </div>
        </div>


        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-1.5">
              <label className="font-semibold text-white" htmlFor="title">
                Movie Name
              </label>
              <input value={movieData.movieName} className="bg-red-600 p-2 rounded-lg text-white" id="title" name="movieName"  placeholder="Enter Movie Name" onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="font-semibold text-white" htmlFor="movieReating">
                Movie Reating
              </label>
              <input value={movieData.movieReating} name="movieReating" className="bg-red-600 p-2 rounded-lg text-white" id="movieReating"  placeholder="Enter Rating out of 10" type="number" min="0" max="10" onChange={handleChange} />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="font-semibold text-white" htmlFor="releaseDate">
              Release date
              </label>
              <input className="bg-red-600 p-2 rounded-lg text-white" id="releaseDate" value={movieData.releaseDate} name="releaseDate" onChange={handleChange} placeholder="" type="date" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="font-semibold text-white" htmlFor="numberofmovie">
                Nouber of Movies
              </label>
              <input className="bg-red-600 p-2 rounded-lg text-white" id="numberofmovie" value={movieData.numMovie} name="numMovie" placeholder="Enter Number of Movie" type="number"  onChange={(e) => {handleNumberOfMoviesChange(e); handleChange(e);}}  />
            </div>

            
            
          </div>

          <div className="mt-8 flex flex-col space-y-1.5">
            <label className="font-semibold text-white" htmlFor="trialer">
              Trialer Link
            </label>
              <input type="url" className="bg-red-600 p-2 rounded-lg text-white" placeholder="Umbeded Youtube trailer" name="trailerLink" id="trialer" value={movieData.trailerLink} onChange={handleChange} />
          </div> 

          <div className="mt-8 flex flex-col space-y-1.5">
            <label className="font-semibold text-white" htmlFor="trialer">
              Movie Link
            </label>
              <input type="url" className="bg-red-600 p-2 rounded-lg text-white" placeholder="Umbeded Youtube trailer" name="movieLink" id="trialer" value={movieData.movieLink} onChange={handleChange} />
          </div> 

           <div className="mt-4 flex flex-col space-y-1.5">
            <label className="font-semibold text-white" htmlFor="description">
              Description*
            </label>
            <textarea
             className="bg-red-600 p-2 rounded-lg text-white"
              id="description"
              placeholder="Write down what the movie is about..."
              value={movieData.movieAbout}
              name="movieAbout"
              onChange={handleChange}

            />
          </div> 
        </div>
      </div>

     


      <div className="grid grid-cols-3 gap-4 mt-2 text-center" >      
      {videoFiles.map((file, index) => (
        <div key={index}>
          <input
            type="file"
            accept="video/*"
            className="text-red-500 font-bold rounded-lg mt-2 hover:text-white border-red-500"
            onChange={(e) => handleVideoFileChange(e, index)}
          />
        </div>
        ))}
      </div>

       
      <div className="mt-4 flex justify-between">
            <button className="bg-red-600 text-white p-2 font-bold rounded-xl hover:bg-white hover:text-red-600" >
              Archive
            </button>
            <button className="bg-red-600 text-white p-2 font-bold rounded-xl hover:bg-white hover:text-red-600"  onClick={handleMovieUpload} >Upload Movie</button>
          </div>

    </div>
  )
}

