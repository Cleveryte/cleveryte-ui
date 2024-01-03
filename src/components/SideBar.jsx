import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function SideBar() {

const [mobileSideBar, setMobileSideBar] = useState(true);

const toggleSideBar = () =>{
    setMobileSideBar(!mobileSideBar)
}

  return (
    <div>
        <div className='flex absolute mx-2 right-0'> 
                <Icon className={`${mobileSideBar ? 'hidden' : 'block md:hidden'} text-4xl opacity-25`} icon="gg:close-r" onClick={toggleSideBar} color='#5d5d5d' />
        </div>
         <div className='block md:hidden'>
                <Icon className={`${mobileSideBar ? '' : 'hidden'} text-3xl text-[#003466] rounded-lg m-0 w-[30px] h-[30px]`} onClick={toggleSideBar} icon="lucide:panel-left" />
            </div>
        <aside className={`${mobileSideBar ? "hidden md:block" : ""} h-[85vh] w-[250px] mt-2 overflow-auto border-b border-b-gray-100`}>
            <nav>
                <ul className=''>
                    <div className='flex items-center gap-2'>
                        <Icon className='text-2xl' icon="clarity:book-solid" color='#003366' />
                        <h2 className='text-xl font-semibold'>Getting Started</h2>
                    </div>
                        <li>Introduction</li>
                        <li>Themes</li>
                        <li>Responsive</li>
                        <li>Custimization</li>
                
                </ul>
                <ul className='mt-3 md:mt-6'>
                    <div className='flex items-center gap-2'>
                        <Icon className='text-2xl' icon="material-symbols:dashboard" color='#003366' />
                        <h2 className='text-xl font-semibold'>Components</h2>
                    </div>
                        <li>Accordion</li>
                        <li>Alerts</li>
                        <li>Breadcumb</li>
                        <li>Buttons</li>
                        <li>Button group</li>
                        <li>Cards</li>
                        <li>Carousel</li>
                        <li>Collapse</li>
                        <li>Dropdowns</li>
                        <li>Lists</li>
                        <li>Modal</li>
                        <li>Navbar</li>
                        <li>Navs & Tabs</li>
                        <li>Tables</li>
                        <li>Toast</li>
                
                </ul>
                <ul className='mt-3 md:mt-6'>
                    <div className='flex items-center gap-2'>
                        <Icon className='text-2xl' icon="jam:world" color='#003366' />
                        <h2 className='text-xl font-semibold'>About</h2>
                    </div>
                    <li>Team</li>
                    <li>License</li>
                </ul>
            </nav>
        </aside>
        
    </div>
  )
}
