import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs =['PHOTOS', 'VIDEOS' ,'GIF']

    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex gap-10 p-10'>
      {tabs.map(function(element, index){
        return <button 
        className={` ${(activeTab==element? 'bg-blue-700' : 'bg-gray-600')} px-5 py-2 rounded cursor-pointer active:scale-90`}
        key={index}
        onClick={()=>{
            dispatch(setActiveTabs(element))
        }}>
        {element}</button>
      })}
    </div>
  )
}

export default Tabs
