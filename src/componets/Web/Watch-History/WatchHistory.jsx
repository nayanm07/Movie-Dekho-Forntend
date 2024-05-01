import axios from 'axios';
import React, { useEffect } from 'react'
import GridMovie from '../WishList/GridMovie';


function WatchHistory() {

    const [watchHistoryData, setWatchHistory] = React.useState([]);

    const removeWatchHistory = (id) => {
        axios.post(`/api/v1/user/removeWatachHistoryMovie/${id}`)
            .then(response => {
                alert("Remove from WatchHistory")
                refreshwhatchHistory();
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }



    const refreshwhatchHistory = () => {
        axios.get('/api/v1/users/getWatchHistory')
            .then(response => {
                setWatchHistory(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }

    useEffect(() => {

      

        axios.get('/api/v1/users/getWatchHistory')
            .then(response => {
                setWatchHistory(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    console.log(watchHistoryData);

    return (
        <div className='w-full mt-20 '>
            <h2 className='text-center text-white uppercase'> || Your Watch_History ||</h2>
            <GridMovie  data={watchHistoryData} remove={removeWatchHistory} />
        </div>
    )
}

export default WatchHistory
