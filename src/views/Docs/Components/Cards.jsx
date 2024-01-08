import SideBar from '../../../components/SideBar'
import CustomCodeBlock from '../../../components/CustomCodeBlock'
import CardsCode from '../../../code/CardsCode.json'

export default function Cards() {

  return (
    <div className='container px-2 py-4'>
        <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
            <SideBar/>
            <div className="content mt-10 md:mt-2 px-2">
                <h2 className="text-3xl font-bold mb-2">Cards</h2>
                <p className="text-[#9A9A9A] mb-6">Cards are used to group and display content in a way that is easily readable.</p>

                <h3 className="mb-4"># Simple card</h3>
                <CustomCodeBlock 
                  htmlPreview={CardsCode.simple_card.htmlPreview} 
                  htmlFormatted={CardsCode.simple_card.htmlFormatted} 
                  jsxFormatted={CardsCode.simple_card.jsxFormatted} 
                />          
            </div>
        </div>
    </div>   
  )
}

