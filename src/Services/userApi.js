import axios from "axios"


//sign API
 






const addWishListMovie = async (movieId) => {
    axios.post(`/api/v1/users/addWishListMovie/${movieId}`)
    .then(response => {
        alert("Movie Added in wishList")
    })
    .catch(err => {
        if (err.response && err.response.status === 400) {
            alert("This Movie already in wishList")
            
        }

        console.log(err);
    })
}


const addWatchHistoryMovie = async (movieId) => {
    axios.post(`/api/v1/users/addWatachHistoryMovie/${movieId}`)
    .then(response => {
        console.log("add in watch history");
    })
    .catch(err => {

        console.log(err);
    })

}






export {
    addWishListMovie,
    addWatchHistoryMovie,
}
   