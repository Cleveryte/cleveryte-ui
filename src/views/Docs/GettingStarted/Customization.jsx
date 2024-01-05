import SideBar from '../../../components/SideBar'
import ContentNavButtons from '../../../components/ContentNavButtons';
import CustomCodeBlock from '../../../components/CustomCodeBlock';

export default function Customization() {
  return (
    <main className="container px-2 py-4">
        <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
            <SideBar/>
            <div className="content mt-10 md:mt-2 px-2">
                <h2 className="text-3xl font-bold mb-2">Customization</h2>
                <p className="text-[#9A9A9A] mb-6">At Cleveryte, we take pride in offering unparalleled flexibility and customization options for our UI components. Our commitment to empowering developers and designers is reflected in the fact that all Cleveryte UI components are 100% customizable. <br /> <br />Whether you prefer harnessing the convenience of Tailwind CSS utility classes or delving into the intricacies of custom CSS, our components provide you with the freedom to tailor every aspect of the user interface to suit your unique design requirements. <br /> <br />With Tailwind CSS&apos;s extensive utility classes, you can easily modify styles, layouts, and responsiveness, ensuring a seamless integration into your project. Alternatively, for those who seek a more hands-on and bespoke approach, our components welcome the use of custom CSS, allowing you to exercise full creative control over the appearance and behavior of each element. At Cleveryte, we understand that every project has its own set of design needs, and our commitment to complete customization ensures that our UI components effortlessly adapt to your vision, making your development process smoother and more tailored to your specific aesthetic preferences.</p>
                
                <CustomCodeBlock code={"<p className='text-xl text-black'>This is a paragraph</p>"} language={"html"} />
             
              
              {/* Page navigation */}
              <ContentNavButtons previousLink={"/responsive"} nextLink={""} />

              

            </div>
        </div>     
    </main>
  )
}

