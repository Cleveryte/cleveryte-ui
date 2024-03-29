import { useState,useRef } from "react";
import { Icon } from '@iconify/react';

export default function CustomCodeBlock({ htmlPreview, htmlFormatted, jsxFormatted }) {

    let preview = "Preview";
    let html = "Html";
    let jsx = "Jsx";
    const [currentTab, setCurrentTab] = useState(preview);
    const copyButtonRef = useRef(null);
    const [copyBtnText, setCopyBtnText] = useState("Copy");

    const copyCurrentCode = () => {
        setCopyBtnText("Copied");
        switch (currentTab) {
            case html:
                navigator.clipboard.writeText(htmlFormatted);
                break;
            case jsx:
                navigator.clipboard.writeText(jsxFormatted);
            break;
        
            default:
                break;
        }
        setTimeout(() => {
            setCopyBtnText("Copy");
        }, 5000);
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

                <button onClick={() => copyCurrentCode()} className={`py-2 px-4 bg-[#949393] dark:bg-[#121212] inline-flex items-baseline float-end
                    ${currentTab === preview ? "hidden" : "" }`}>
                    <Icon icon="mdi:clipboard-outline" className="mr-2 relative top-1" /> 
                    <span ref={copyButtonRef}>{copyBtnText}</span>
                </button>
            </div>       

            <div className={`code-block w-full md:w-3/4 p-4 border-2 border-[#949393] dark:border-[#121212] overflow-auto
                ${currentTab === preview ? "" : "bg-[#D9D9D9] dark:bg-[#1E1E1E]" } `}>
                <div className={`${currentTab === preview ? "" : "hidden" }`} dangerouslySetInnerHTML={{ __html: htmlPreview }}>
                </div>

                <pre className={`text-[#949393] ${currentTab === html ? "" : "hidden" }`}>
                    {htmlFormatted}
                </pre>

                <pre className={`text-[#949393] ${currentTab === jsx ? "" : "hidden" }`}>
                    {jsxFormatted}
                </pre>
            </div>

            
        </>
    );
}

