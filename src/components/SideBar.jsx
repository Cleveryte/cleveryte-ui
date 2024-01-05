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
   <div className='sticky top-0'>
     <div className='bg-white dark:bg-[#292929]'>
         <div className='block md:hidden'>
                <Icon className={`${mobileSideBar ? '' : 'hidden'} text-3xl text-[#003466] dark:text-white rounded-lg m-0 w-[30px] h-[30px]`} onClick={toggleSideBar} icon="lucide:panel-left" />
            </div>
        <aside className={`${mobileSideBar ? "hidden md:block" : ""} h-[100vh] w-[250px] mt-2 overflow-auto border-b border-b-gray-100`}>
            <nav>
                <ul className=''>
                    <div className='flex items-center gap-2 text-black dark:text-white'>
                        <Icon className='text-2xl text-[#003366] dark:text-[#115daa]' icon="clarity:book-solid"/>
                        <h2 className='text-xl font-semibold'>Getting Started</h2>
                    </div> 
                    <Link className={`${currentPath == "/" ? 'bottom-rounded text-white' : ''}`} to={"/"}>
                        <li className='text-[#9A9A9A]'>Introduction</li>
                    </Link>
                    <Link className={`${currentPath == "/themes" ? 'bottom-rounded' : ''}`} to={"/themes"}>
                        <li className='text-[#9A9A9A]'>Themes</li>
                    </Link>
                    <Link className={`${currentPath == "/responsive" ? 'bottom-rounded' : ''}`} to={"/responsive"}>
                        <li className='text-[#9A9A9A]'>Responsive</li>
                    </Link>
                    <Link className={`${currentPath == "/customization" ? 'bottom-rounded' : ''}`} to={"/customization"}>
                        <li className='text-[#9A9A9A]'>Customization</li>
                    </Link>
                
                </ul>
                <ul className='mt-3 md:mt-6 text-black dark:text-white'>
                    <div className='flex items-center gap-2'>
                        <Icon className='text-2xl text-[#003366] dark:text-[#115daa]' icon="material-symbols:dashboard" />
                        <h2 className='text-xl font-semibold'>Components</h2>
                    </div>
                    <Link className={`${currentPath == "/accordion" ? 'bottom-rounded' : ''}`} to={"/accordion"}>
                        <li className='text-[#9A9A9A]'>Accordion</li>
                    </Link>
                    <Link className={`${currentPath == "/alerts" ? 'bottom-rounded' : ''}`} to={"/alerts"}>
                        <li className='text-[#9A9A9A]'>Alerts</li>
                    </Link>
                    <Link className={`${currentPath == "/breadcumb" ? 'bottom-rounded' : ''}`} to={"/breadcumb"}>
                        <li className='text-[#9A9A9A]'>Breadcumb</li>
                    </Link>
                    <Link className={`${currentPath == "/buttongroup" ? 'bottom-rounded' : ''}`} to={"/buttongroup"}>
                        <li className='text-[#9A9A9A]'>Button Group</li>
                    </Link>
                    <Link className={`${currentPath == "/buttons" ? 'bottom-rounded' : ''}`} to={"/buttons"}>
                        <li className='text-[#9A9A9A]'>Buttons</li>
                    </Link>
                    <Link className={`${currentPath == "/cards" ? 'bottom-rounded' : ''}`} to={"/cards"}>
                        <li className='text-[#9A9A9A]'>Cards</li>
                    </Link>
                    <Link className={`${currentPath == "/carousel" ? 'bottom-rounded' : ''}`} to={"/carousel"}>
                        <li className='text-[#9A9A9A]'>Carousel</li>
                    </Link>
                    <Link className={`${currentPath == "/collapse" ? 'bottom-rounded' : ''}`} to={"/collapse"}>
                        <li className='text-[#9A9A9A]'>Collapse</li>
                    </Link>
                    <Link className={`${currentPath == "/dropdowns" ? 'bottom-rounded' : ''}`} to={"/dropdowns"}>
                        <li className='text-[#9A9A9A]'>Dropdowns</li>
                    </Link>
                     <Link className={`${currentPath == "/lists" ? 'bottom-rounded' : ''}`} to={"/lists"}>
                        <li className='text-[#9A9A9A]'>Lists</li>
                    </Link>
                    <Link className={`${currentPath == "/modal" ? 'bottom-rounded' : ''}`} to={"/modal"}>
                        <li className='text-[#9A9A9A]'>Modal</li>
                    </Link>
                    <Link className={`${currentPath == "/navbar" ? 'bottom-rounded' : ''}`} to={"/navbar"}>
                        <li className='text-[#9A9A9A]'>Navbar</li>
                    </Link>
                    <Link className={`${currentPath == "/navtabs" ? 'bottom-rounded' : ''}`} to={"/navtabs"}>
                        <li className='text-[#9A9A9A]'>Nav & Tabs</li>
                    </Link>
                    <Link className={`${currentPath == "/tables" ? 'bottom-rounded' : ''}`} to={"/tables"}>
                        <li className='text-[#9A9A9A]'>Tables</li>
                    </Link>
                    <Link className={`${currentPath == "/toast" ? 'bottom-rounded' : ''}`} to={"/toast"}>
                        <li className='text-[#9A9A9A]'>Toast</li>
                    </Link>
                
                </ul>
                <ul className='mt-3 md:mt-6 text-black dark:text-white'>
                    <div className='flex items-center gap-2'>
                        <Icon className='text-2xl text-[#003366] dark:text-[#115daa]' icon="jam:world" />
                        <h2 className='text-xl font-semibold'>About</h2>
                    </div>
                    <Link className={`${currentPath == "/team" ? 'bottom-rounded' : ''}`} to={"/team"}>
                        <li className='text-[#9A9A9A]'>Team</li>
                    </Link>
                    <Link className={`${currentPath == "/license" ? 'bottom-rounded' : ''}`} to={"/license"}>
                        <li className='text-[#9A9A9A]'>License</li>
                    </Link>
                </ul>
            </nav>
        </aside>
        <div className='mx-2'> 
                <Icon className={`${mobileSideBar ? 'hidden' : 'block md:hidden'} text-4xl opacity-25`} icon="gg:close-r" onClick={toggleSideBar} color='#5d5d5d' />
        </div>
    </div>
   </div>
  )
}
