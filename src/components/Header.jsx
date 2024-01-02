import LogoImage from "../assets/images/Cleveryte.png"
import { Icon } from '@iconify/react';
import { Link, useLocation  } from 'react-router-dom';

export default function Header() {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className="shadow-lg">
            <div className="container grid grid-cols-1 md:grid-cols-3 px-2 py-6 md:py-0">
                <section className="logo flex items-center px-2 md:px-0">
                    <Link to="/">
                        <img 
                            src={LogoImage} 
                            className="w-[2.5em] inline-block mr-2"
                            alt="CleveryteUI" 
                        />
                    </Link>
                    <Link to="/">
                        <h1 className="font-bold text-xl">
                            Cleveryte UI
                        </h1>
                    </Link>
                </section>

                <section className="logo flex items-center px-2">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className={`relative mt-6 md:mt-0 w-full  ${currentPath == "/blog" ? "hidden":""}`}>
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <Icon icon="material-symbols:search" width="20" height="20" className="text-[#C5C5C5]" />
                        </div>
                        <input type="text" id="default-search" className="w-full p-2 ps-10 text-md text-gray-900 border border-[#C5C5C5] rounded-lg outline-none" autoComplete="off" spellCheck="false" placeholder="Search" required />
                    </div>
                </section>

                <nav className="w-full">
                <ul className="font-medium md:float-end text-[#5E5E5E] flex flex-col p-0 md:p-4 mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0">
                    <li>
                        <Link to="/" className={`block py-2 px-3 rounded ${currentPath == "/" ? "header-link-active":""}`}>Docs</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={`block py-2 px-3 rounded ${currentPath == "/blog" ? "header-link-active":""}`}>Blog</Link>
                    </li>
                    <li>
                        <a href="https://github.com/Cleveryte/cleveryte-ui" target="_blank" rel="noreferrer" className="py-2 px-3 rounded flex items-center">
                            <Icon icon="mdi:github" width="25" height="25" />
                        </a>
                    </li>
                    
                </ul>
                </nav>
            </div>
            
        </header>
    )
}
