import SideBar from '../../../components/SideBar'
import LightThemeImage from '../../../assets/images/LightTheme.png'
import DarkThemeImage from '../../../assets/images/DarkTheme.png'
import ContentNavButtons from '../../../components/ContentNavButtons';

export default function Themes() {
  return (
    <main className="container px-2 py-4">
        <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
            <div className='relative'>
              <SideBar/>
            </div>
            <div className="content mt-10 md:mt-2 px-2">
              <h2 className="text-3xl font-bold mb-2">Themes</h2>
              <p className="text-[#9A9A9A] mb-6">At Cleveryte UI, we understand that design flexibility is key to creating exceptional user experiences. That&apos;s why, right out of the box, we offer a seamless blend of aesthetics with our default light and dark themes. <br /> Whether you prefer a clean and airy interface or a sleek and sophisticated look, Cleveryte UI has you covered. Effortlessly switch between the two themes to find the perfect backdrop for your content. With our carefully curated themes, your web applications will not only look stunning but also adapt seamlessly to diverse design preferences.</p>

              <h4 className="font-semibold text-xl">Current themes</h4>
              <div className="grid grid-cols-2 my-6 w-full md:w-1/2 gap-4">
                <img src={LightThemeImage} alt="LightTheme" className="w-[15em] shadow-lg rounded" />
                <img src={DarkThemeImage} alt="DarkTheme" className="w-[15em] shadow-lg rounded"  />
              </div>
             
              
              {/* Page navigation */}
              <ContentNavButtons previousLink={"/introduction"} nextLink={"/responsive"} />

              

            </div>
        </div>     
    </main>
  )
}

