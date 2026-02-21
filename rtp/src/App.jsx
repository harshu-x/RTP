import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {
  
  return (
    <div className='h-screen w-full bg-gray-850'>
      

      <button className='bg-red-600' 
      onClick={()=>{
        fetchPhotos('cat')
      }}>Get Photos</button>
    </div>
  )
}

export default App
