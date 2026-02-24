import React from 'react'
import { fetchGIF, fetchPhotos, fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'

const App = () => {
  
  return (
    <div className='h-screen w-full bg-gray-850'>
      

      {/* <button className='bg-emerald-400 px-4 py-3 m-5' 
      onClick={async ()=>{
        const data =await fetchPhotos('dog');
        console.log(data.results);
      }}>Get Photos</button>


      
      <button className='bg-emerald-500 px-4 py-3 m-5' 
      onClick={async ()=>{
        const data =await fetchVideos('nature');
        console.log(data.videos);
      }}>Get Videos</button>


      <button className='bg-emerald-600 px-4 py-3 m-5' 
      onClick={async ()=>{
        const data =await fetchGIF('nature');
        console.log(data);
      }}>Get Videos</button> */}


      <SearchBar />
    </div>
  )
}

export default App
