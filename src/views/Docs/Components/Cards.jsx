import SideBar from '../../../components/SideBar'
import CustomCodeBlock from '../../../components/CustomCodeBlock'

export default function Cards() {

  const htmlCode = `<div class="card rounded-lg bg-white dark:bg-[#121212] border border-[#DADADA] dark:border-none shadow-lg p-4 w-[40em]">
                      <h2 class="font-extrabold text-2xl text-black dark:text-white mb-2">Card</h2>
                      <p class="text-[#949393]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget eleifend dolor. Ut a nisl nulla. Praesent a sem sapien. Vestibulum tincidunt ipsum euismod, vehicula lacus ullamcorper, varius dui. Phasellus faucibus magna eget purus ultrices, ut aliquam arcu efficitur.</p>
                    </div>`
  const jsxCode = `<div className="card rounded-lg bg-white dark:bg-[#121212] shadow-lg p-4 w-[40em]">
                    <h2 className="font-extrabold text-2xl text-black dark:text-white mb-2">Card</h2>
                    <p className="text-[#949393]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget eleifend dolor. Ut a nisl nulla. Praesent a sem sapien. Vestibulum tincidunt ipsum euismod, vehicula lacus ullamcorper, varius dui. Phasellus faucibus magna eget purus ultrices, ut aliquam arcu efficitur.</p>
                  </div>`

  return (
    <div className='container px-2 py-4'>
        <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
            <SideBar/>
            <div className="content mt-10 md:mt-2 px-2">
                <h2 className="text-3xl font-bold mb-2">Cards</h2>
                <p className="text-[#9A9A9A] mb-6">Cards are used to group and display content in a way that is easily readable.</p>
                
                <h3 className="mb-4"># Simple card</h3>
                <CustomCodeBlock htmlCode={htmlCode} jsxCode={jsxCode} />
                

              

            </div>
        </div>
    </div>   
  )
}

