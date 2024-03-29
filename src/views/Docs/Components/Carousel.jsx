import React from 'react'
import SideBar from '../../../components/SideBar'

export default function Carousel() {
  return (
    <div className='container px-2 py-4'>
        <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
            <SideBar/>
            <div className="content mt-2">
            Carousel
            </div>
        </div>
    </div>   
  )
}

