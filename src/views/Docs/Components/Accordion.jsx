import SideBar from '../../../components/SideBar'
import CustomCodeBlock from '../../../components/CustomCodeBlock'

export default function Accordion() {
  return (
    <div className='container px-2 py-4'>
        <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
            <SideBar/>
            <div className="content mt-10 md:mt-2 px-2">
                <h2 className="text-3xl font-bold mb-2">Accordion</h2>
                <p className="text-[#9A9A9A] mb-6">Accordion is used for showing and hiding content but only one item can stay open at a time.</p>
                
                <CustomCodeBlock code={"<p className='text-xl text-black'>This is a paragraph</p>"} language={"html"} />
             

              

            </div>
        </div>
    </div>   
  )
}

