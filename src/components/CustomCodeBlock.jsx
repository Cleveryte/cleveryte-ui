import { useState } from "react";
import { Icon } from '@iconify/react';

export default function CustomCodeBlock({ htmlCode, jsxCode }) {

    let preview = "Preview";
    let html = "Html";
    let jsx = "Jsx";
    const [currentTab, setCurrentTab] = useState(preview);

    const copyCurrentCode = () => {

    }

    return (
        <>  
            <div className="actions w-full md:w-3/4">
                <button onClick={() => setCurrentTab(preview)} className={`py-2 px-4 bg-[#949393] dark:bg-[#121212] 
                    ${currentTab === preview ? "text-black dark:text-white" : "text-[#D9D9D9] dark:text-[#9A9A9A]" }`}>
                    Preview
                </button> 
                
                <button onClick={() => setCurrentTab(html)} className={`py-2 px-4 bg-[#949393] dark:bg-[#121212] 
                    ${currentTab === html ? "text-black dark:text-white" : "text-[#D9D9D9] dark:text-[#9A9A9A]" }`}>
                    HTML
                </button> 

                <button onClick={() => setCurrentTab(jsx)} className={`py-2 px-4 bg-[#949393] dark:bg-[#121212] 
                    ${currentTab === jsx ? "text-black dark:text-white" : "text-[#D9D9D9] dark:text-[#9A9A9A]" }`}>
                    JSX
                </button>  

                <button onClick={() => setCurrentTab(jsx)} className={`py-2 px-4 bg-[#949393] dark:bg-[#121212] inline-flex items-baseline float-end
                    ${currentTab === preview ? "hidden" : "" }`}>
                    <Icon icon="mdi:clipboard-outline" className="mr-2 relative top-1" /> Copy
                </button>
            </div>       

            <div className={`code-block w-full md:w-3/4 p-4 border-2 border-[#949393] dark:border-[#121212] 
                ${currentTab === preview ? "" : "bg-[#D9D9D9] dark:bg-[#1E1E1E]" } `}>
                <div className={`${currentTab === preview ? "" : "hidden" }`} dangerouslySetInnerHTML={{ __html: htmlCode }}>
                </div>

                <code className={`text-[#949393] ${currentTab === html ? "" : "hidden" }`}>
                    {htmlCode}
                </code>

                <code className={`text-[#949393] ${currentTab === jsx ? "" : "hidden" }`}>
                    {jsxCode}
                </code>
            </div>

            
        </>
    );
}

