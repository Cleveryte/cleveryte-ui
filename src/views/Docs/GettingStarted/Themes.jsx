import { Link  } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SideBar from '../../../components/SideBar'

export default function Themes() {
  return (
    <main className="container px-2 py-4">
        <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
            <SideBar/>
            <div className="content mt-10 md:mt-2 px-2">
              <h2 className="text-3xl font-bold mb-2">Themes</h2>
              <p className="text-[#9A9A9A] mb-6">At Cleveryte UI, we understand that design flexibility is key to creating exceptional user experiences. That&apos;s why, right out of the box, we offer a seamless blend of aesthetics with our default light and dark themes. <br /> Whether you prefer a clean and airy interface or a sleek and sophisticated look, Cleveryte UI has you covered. Effortlessly switch between the two themes to find the perfect backdrop for your content. With our carefully curated themes, your web applications will not only look stunning but also adapt seamlessly to diverse design preferences.</p>

              
              
              {/* Page navigation */}
              <div className="grid grid-cols-2">
                <div className="left text-start">
                  <Link to={"/"}>
                    <button className="my-6 text-black px-4 py-2 rounded flex items-center float-start">
                      <Icon icon="teenyicons:left-outline" width="13" height="13" className="mr-1" />  Introduction
                    </button>
                  </Link>
                </div>
                <div className="right text-end">
                  <Link to={"/themes"}>
                    <button className="my-6 text-black px-4 py-2 rounded flex items-center float-end">
                      Responsive <Icon icon="teenyicons:right-outline" width="13" height="13" className="ml-1" /> 
                    </button>
                  </Link>
                </div>
              </div>

              

            </div>
        </div>     
    </main>
  )
}

