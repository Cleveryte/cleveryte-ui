import SideBar from '../../../components/SideBar'
import { Icon } from '@iconify/react';

export default function Buttons() {


  return (
    <div className='container px-2 py-4'>
        <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
            <SideBar/>
            <div className="content mt-10 md:mt-2 px-2">
                <h2 className="text-3xl font-bold mb-2">Buttons</h2>
                <p className="text-[#9A9A9A] mb-6"></p>
                
                <h3 className="mb-4">Buttons</h3>
              
            </div>
            
        </div>
    </div>   
  )
}

