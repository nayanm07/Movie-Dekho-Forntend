import axios from 'axios';
import React, { useEffect } from 'react'
import GridMovie from './GridMovie';

function WishList() {

    const [wishListData, setWishListData] = React.useState([]);

    useEffect(() => {

      

        axios.get('/api/v1/users/getWishList')
            .then(response => {
                setWishListData(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);



    return (
        <div className='w-full mt-20 '>
            <h2 className='text-center text-white uppercase'> || Your Wish-List ||</h2>
            <GridMovie  data={wishListData} />
        </div>
    )
}

export default WishList
