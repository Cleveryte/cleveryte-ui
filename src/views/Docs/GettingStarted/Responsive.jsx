import SideBar from '../../../components/SideBar'
import ContentNavButtons from '../../../components/ContentNavButtons';

export default function Responsive() {
  return (
    <main className="container px-2 py-4">
        <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
            <div className='relative'>
              <SideBar/>
            </div>
            <div className="content mt-10 md:mt-2 px-2">
                <h2 className="text-3xl font-bold mb-2">Responsive</h2>
                <p className="text-[#9A9A9A] mb-6">A responsive website is a crucial element in today&apos;s digital landscape, playing a pivotal role in enhancing user experience and ensuring accessibility across various devices. With the diverse array of devices used to access the internet, from smartphones and tablets to desktop computers, a responsive design adapts seamlessly to different screen sizes and resolutions.</p>

                <p className="text-[#9A9A9A] mb-6">At Cleveryte, our design philosophy revolves around creating web components that are meticulously crafted with a Mobile-First approach, prioritizing the seamless user experience on handheld devices. Leveraging the power and flexibility of Tailwind CSS responsive breakpoints, we ensure that our components are not only visually appealing but also adapt flawlessly to various screen sizes and resolutions. <br /> <br /> By embracing the Mobile-First strategy, we prioritize the needs of users accessing our applications on smartphones and tablets, delivering a design that is intuitive, efficient, and aesthetically pleasing on smaller screens. This commitment to responsiveness, coupled with the versatility of Tailwind CSS, allows us to build components that effortlessly scale and optimize, providing a consistent and delightful user experience across the entire spectrum of devices. At Cleveryte, we believe in not just meeting but exceeding the expectations of our users, and our Mobile-First, Tailwind-driven approach is at the forefront of achieving this goal.</p>
                
                <p className="text-[#9A9A9A]">Check <a className="hover:underline font-bold text-[#9B00B6]" href="https://tailwindcss.com/docs/responsive-design" target="_blank" rel="noreferrer">Tailwind CSS Responsive Design</a></p>

              
             
              
              {/* Page navigation */}
              <ContentNavButtons previousLink={"/themes"} nextLink={"/customization"} />

              

            </div>
        </div>     
    </main>
  )
}

