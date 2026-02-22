import axios from "axios";


const UNSPLASH_KEY = import.meta.env.VITE_U_KEY
const PEXELS_KEY = import.meta.env.VITE_P_KEY
const TENOR_KEY = import.meta.env.VITE_T_KEY

export async function fetchPhotos(query,page=1 , per_page=20){
    const res = await axios.get('https://api.unsplash.com/search/photos' ,{
        params :{query ,page , per_page},
        headers:{Authorization : `Client-ID ${UNSPLASH_KEY}`}
    });
 


    return res.data ;
}


export async function fetchVideos(query , per_page=15){
    const res = await axios.get('https://api.pexels.com/videos/search' ,{
        params :{query , per_page},
        headers:{Authorization : PEXELS_KEY}
    });
 


    return res.data ;
}

export async function fetchGIF(query , limit=15){
    const res = await axios.get('https://api.giphy.com/v1/gifs/search' ,{
        params :{
            q:query,
            limit:limit,
            api_key : TENOR_KEY
        },
       
    });
 


    return res.data ;
}