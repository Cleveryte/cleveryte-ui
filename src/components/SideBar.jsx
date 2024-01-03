import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';

export default function SideBar() {

const [mobileSideBar, setMobileSideBar] = useState(true);

const toggleSideBar = () =>{
    setMobileSideBar(!mobileSideBar)
}

const location = useLocation();
const currentPath = location.pathname;

  return (
    <div className='flex absolute z-20 md:relative bg-white'>
         <div className='block md:hidden'>
                <Icon className={`${mobileSideBar ? '' : 'hidden'} text-3xl text-[#003466] rounded-lg m-0 w-[30px] h-[30px]`} onClick={toggleSideBar} icon="lucide:panel-left" />
            </div>
        <aside className={`${mobileSideBar ? "hidden md:block" : ""} h-[85vh] w-[250px] mt-2 overflow-auto border-b border-b-gray-100`}>
            <nav>
                <ul className=''>
                    <div className='flex items-center gap-2'>
                        <Icon className='text-2xl' icon="clarity:book-solid" color='#003366'/>
                        <h2 className='text-xl font-semibold'>Getting Started</h2>
                    </div> 
                    <Link className={`${currentPath == "/" ? 'bottom-rounded' : ''}`} to={"/"}>
                        <li>Introduction</li>
                    </Link>
                    <Link className={`${currentPath == "/themes" ? 'bottom-rounded' : ''}`} to={"/themes"}>
                        <li>Themes</li>
                    </Link>
                    <Link className={`${currentPath == "/responsive" ? 'bottom-rounded' : ''}`} to={"/responsive"}>
                        <li>Responsive</li>
                    </Link>
                    <Link className={`${currentPath == "/customization" ? 'bottom-rounded' : ''}`} to={"/customization"}>
                        <li>Customization</li>
                    </Link>
                
                </ul>
                <ul className='mt-3 md:mt-6'>
                    <div className='flex items-center gap-2'>
                        <Icon className='text-2xl' icon="material-symbols:dashboard" color='#003366' />
                        <h2 className='text-xl font-semibold'>Components</h2>
                    </div>
                    <Link className={`${currentPath == "/accordion" ? 'bottom-rounded' : ''}`} to={"/accordion"}>
                        <li>Accordion</li>
                    </Link>
                    <Link className={`${currentPath == "/alerts" ? 'bottom-rounded' : ''}`} to={"/alerts"}>
                        <li>Alerts</li>
                    </Link>
                    <Link className={`${currentPath == "/breadcumb" ? 'bottom-rounded' : ''}`} to={"/breadcumb"}>
                        <li>Breadcumb</li>
                    </Link>
                    <Link className={`${currentPath == "/buttongroup" ? 'bottom-rounded' : ''}`} to={"/buttongroup"}>
                        <li>Button Group</li>
                    </Link>
                    <Link className={`${currentPath == "/buttons" ? 'bottom-rounded' : ''}`} to={"/buttons"}>
                        <li>Buttons</li>
                    </Link>
                    <Link className={`${currentPath == "/cards" ? 'bottom-rounded' : ''}`} to={"/cards"}>
                        <li>Cards</li>
                    </Link>
                    <Link className={`${currentPath == "/carousel" ? 'bottom-rounded' : ''}`} to={"/carousel"}>
                        <li>Carousel</li>
                    </Link>
                    <Link className={`${currentPath == "/collapse" ? 'bottom-rounded' : ''}`} to={"/collapse"}>
                        <li>Collapse</li>
                    </Link>
                    <Link className={`${currentPath == "/dropdowns" ? 'bottom-rounded' : ''}`} to={"/dropdowns"}>
                        <li>Dropdowns</li>
                    </Link>
                     <Link className={`${currentPath == "/lists" ? 'bottom-rounded' : ''}`} to={"/lists"}>
                        <li>Lists</li>
                    </Link>
                    <Link className={`${currentPath == "/modal" ? 'bottom-rounded' : ''}`} to={"/modal"}>
                        <li>Modal</li>
                    </Link>
                    <Link className={`${currentPath == "/navbar" ? 'bottom-rounded' : ''}`} to={"/navbar"}>
                        <li>Navbar</li>
                    </Link>
                    <Link className={`${currentPath == "/navtabs" ? 'bottom-rounded' : ''}`} to={"/navtabs"}>
                        <li>Nav & Tabs</li>
                    </Link>
                    <Link className={`${currentPath == "/tables" ? 'bottom-rounded' : ''}`} to={"/tables"}>
                        <li>Tables</li>
                    </Link>
                    <Link className={`${currentPath == "/toast" ? 'bottom-rounded' : ''}`} to={"/toast"}>
                        <li>Toast</li>
                    </Link>
                
                </ul>
                <ul className='mt-3 md:mt-6'>
                    <div className='flex items-center gap-2'>
                        <Icon className='text-2xl' icon="jam:world" color='#003366' />
                        <h2 className='text-xl font-semibold'>About</h2>
                    </div>
                    <Link className={`${currentPath == "/team" ? 'bottom-rounded' : ''}`} to={"/team"}>
                        <li>Team</li>
                    </Link>
                    <Link className={`${currentPath == "/license" ? 'bottom-rounded' : ''}`} to={"/license"}>
                        <li>License</li>
                    </Link>
                </ul>
            </nav>
        </aside>
        <div className='mx-2'> 
                <Icon className={`${mobileSideBar ? 'hidden' : 'block md:hidden'} text-4xl opacity-25`} icon="gg:close-r" onClick={toggleSideBar} color='#5d5d5d' />
        </div>
    </div>
  )
}
