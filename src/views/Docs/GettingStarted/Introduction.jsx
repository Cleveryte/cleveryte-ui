import { Link  } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SideBar from "../../../components/SideBar";

export default function Introduction() {
  return (
    <main className="container px-2 py-4">
        <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
            <SideBar/>
            <div className="content mt-10 md:mt-2 px-2">
              <h2 className="text-3xl font-bold mb-2">Introduction</h2>
              <p className="text-[#9A9A9A] mb-6">Elevate your web development experience with our cutting-edge component library meticulously crafted on the foundation of Tailwind CSS. We believe in simplicity, efficiency, and unparalleled customization, and that&apos;s exactly what Cleveryte UI brings to the table.</p>

              <h3 className="text-xl font-bold mb-6">Why Choose Cleveryte UI ?</h3>
              <ul className="list-disc mb-6">
                <li className="text-[#9A9A9A] mb-6 ml-8"><span className="font-bold text-black">Seamless Integration with Tailwind CSS:</span> Built natively on top of Tailwind CSS, our components seamlessly integrate with your existing workflow, providing a familiar and efficient development experience.</li>
                <li className="text-[#9A9A9A] mb-6 ml-8"><span className="font-bold text-black">Modular and Extensible:</span> Cleveryte UI is designed with modularity in mind. Each component is a standalone powerhouse, ready to be customized to suit your project&apos;s unique needs. Combine them effortlessly to create stunning user interfaces without the hassle.</li>
                <li className="text-[#9A9A9A] mb-6 ml-8"><span className="font-bold text-black">Developer-Friendly Documentation:</span> Dive into our comprehensive documentation, crafted to guide developers of all levels. Whether you&apos;re a seasoned pro or just getting started with Tailwind CSS, our documentation makes integration a breeze.</li>
                <li className="text-[#9A9A9A] mb-6 ml-8"><span className="font-bold text-black">Theming Made Easy:</span> Cleveryte UI empowers you to create cohesive designs with ease. Effortlessly theme your components using Tailwind CSS utility classes or go further with custom styling options.</li>
              </ul>

              <h3 className="text-xl font-bold mb-6">Getting Started</h3>

              <p className="text-[#9A9A9A] mb-2">To kickstart your experience, dive into our collection of components. <br /> Browse through the extensive list, find the perfect match for your project, and seamlessly integrate it into your codebase. Getting started is as easy as selecting a component, copying the provided code snippet, and customizing it to align with your design vision.</p>

              <p className="text-[#9A9A9A] mb-2">Cleveryte UI empowers you to create polished and sophisticated user interfaces with minimal effort. Start exploring the possibilities now, and witness the seamless fusion of functionality and style in your web applications.</p>
              
              {/* Page navigation */}
              <div className="grid grid-cols-2">
                <div className="left text-start">

                </div>
                <div className="right text-end">
                  <Link to={"/themes"}>
                    <button className="my-6 text-black px-4 py-2 rounded flex items-center float-end">
                      Themes <Icon icon="teenyicons:right-outline" width="13" height="13" className="ml-1" /> 
                    </button>
                  </Link>
                </div>
              </div>

              

            </div>
        </div>     
    </main>
  )
}
