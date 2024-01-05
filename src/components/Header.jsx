import LogoImage from "../assets/images/Cleveryte.png"
import { Icon } from '@iconify/react';
import { Link, useLocation  } from 'react-router-dom';
import { useState } from 'react';


export default function Header() {

    const [mobileSearchMenu, setMobileSearchMenu] = useState(true);
    const [mobileNavMenu, setMobileNavMenu] = useState(true);

    const toggleMobileSearch = () => {
        setMobileSearchMenu(!mobileSearchMenu);
    }

    const toggleMobileNav = () => {
        setMobileNavMenu(!mobileNavMenu);
    }

    const location = useLocation();
    const currentPath = location.pathname;

    const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  };

    return (
        <header className="shadow-lg dark:bg-[#1E1E1E] ">
            <div className="container grid grid-cols-2 md:grid-cols-3 px-2 py-6 md:py-0">
                <section className="logo flex items-center px-2 md:px-0">
                    <Link to="/">
                        <img 
                            src={LogoImage} 
                            className="w-[2em] inline-block mr-2"
                            alt="CleveryteUI" 
                        />
                    </Link>
                    <Link to="/">
                        <h1 className="font-bold text-md dark:text-white md:text-[1rem] md:block">
                            Cleveryte UI
                        </h1>
                    </Link>
                </section>

                <div className="mobile-nav md:hidden text-white">
                    <Icon className={`${mobileNavMenu ? "" : "bg-[#9b00b6] text-white"} mt-1 float-end mr-2 p-2 rounded`} onClick={toggleMobileNav} icon="material-symbols:menu" width="40" height="40" />
                    <Icon className={`${mobileSearchMenu ? "" : "bg-[#003466] text-white"} ${currentPath == "/blog" ? "hidden":""} mt-1 float-end mr-4 p-2 rounded`} onClick={toggleMobileSearch} icon="material-symbols:search" width="40" height="40" />
                </div>

                <section className={`${mobileSearchMenu ? "hidden md:block" : ""} md:mt-4 logo flex items-center px-2 col-span-2 md:col-span-1`}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className={`relative mt-6 md:mt-0 w-full  ${currentPath.includes('/blog') ? "hidden":" "}`}>
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <Icon icon="material-symbols:search" width="20" height="20" className="text-[#C5C5C5]" />
                        </div>
                        <input type="text" id="default-search" className="w-full p-2 ps-10 text-md dark:bg-[#1E1E1E] text-gray-900 border border-[#C5C5C5] rounded-lg outline-none" autoComplete="off" spellCheck="false" placeholder="Search" required />
                    </div>
                </section>

                <nav className={`${mobileNavMenu ? "hidden md:block" : ""} w-full col-span-2 md:col-span-1`}>
                <ul className="font-medium md:float-end text-[#5E5E5E] flex p-0 md:p-4 mt-4 md:mt-0 flex-row md:space-x-8 rtl:space-x-reverse text-md md:text-[1rem]">
                    <li>
                        <Link to="/" className={`block py-2 px-3 rounded ${currentPath == "/" ? "header-link-active dark:text-white":""}`}>Docs</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={`block py-2 px-3 rounded ${currentPath == "/blog" ? "header-link-active dark:text-white":""}`}>Blog</Link>
                    </li>
                    <li>
                        <a href="https://github.com/Cleveryte/cleveryte-ui" target="_blank" rel="noreferrer" className="py-2 px-3 rounded flex items-center">
                            <Icon icon="mdi:github" width="25" height="25" />
                        </a>
                    </li>
                    <div className="flex items-center space-x-2">
                    <button 
                    className={`text-2xl cursor-pointer ${
                        darkMode ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        onClick={toggleTheme}
                        >
                    <Icon icon="pepicons-print:sun" />
                     </button>
                     <button
                    className={`text-2xl cursor-pointer ${
                        darkMode ? 'text-gray-300' : 'text-blue-500'
                        }`}
                        onClick={toggleTheme}
                    >
                   
                        <Icon icon="pepicons-print:moon" />
                        
                        </button>
                    </div>
                    
                </ul>
                </nav>
            </div>
            
        </header>
    )
}
