import SideBar from '../../../components/SideBar';
import CustomCodeBlock from '../../../components/CustomCodeBlock';

export default function Alerts() {
  const alerts = [
    {
      htmlCode: `<div class='bg-blue-200 border border-[#759BFF] rounded-full p-2 w-96 text-black flex items-center gap-1'>
                  <iconify-icon class='text-xl' icon="material-symbols:info-outline-rounded"></iconify-icon>
                  <p class='text-sm font-bold'>New update is available</p>
                </div>`,
      jsxCode: `<div className='bg-blue-200 border border-[#759BFF] rounded-full p-2 w-96 text-black flex items-center gap-1'>
                  <Icon icon="material-symbols:info-outline-rounded" className='text-2xl mx-2' />
                  <p className='text-sm font-bold'>New update is available</p>
                </div>`,
    },
    {
      htmlCode: `<div class='bg-green-200 border border-[#00FF00]  rounded-full p-2 w-96 text-black flex items-center gap-1'>
                  <iconify-icon class='text-xl' icon="clarity:success-standard-line"></iconify-icon>
                  <p class='text-sm font-bold'>The update was successfully installed!</p>
               </div>`,
      jsxCode: `<div className='bg-green-200 border border-[#00FF00] rounded-full p-2 w-96 text-black flex items-center gap-1'>
                  <Icon icon="clarity:success-standard-line" className='text-2xl mx-2' />
                  <p className='text-sm font-bold'>The update was successfully installed!</p>
                </div>`,
    },
    {
      htmlCode: `<div class='bg-[#FFEAAE] border border-[#FFBE00] rounded-full p-2 w-96 text-black flex items-center gap-1'>
                  <iconify-icon class='text-xl' icon="ph:warning-bold"></iconify-icon>
                  <p class='text-sm font-bold'>The update was successfully installed!</p>
               </div>`,
      jsxCode: `<div className='bg-green-200 border border-[#00FF00] rounded-full p-2 w-96 text-black flex items-center gap-1'>
                  <Icon icon="ph:warning-bold" className='text-2xl mx-2' />
                  <p className='text-sm font-bold'>The update was successfully installed!</p>
                </div>`,
    },
    {
      htmlCode: `<div class='bg-[#FF9898] border border-[#FD0000]  rounded-full p-2 w-96 text-black flex items-center gap-1'>
                  <iconify-icon class='text-xl' icon="codicon:error"></iconify-icon>
                  <p class='text-sm font-bold'>This action may have undesired consequences.</p>
               </div>`,
      jsxCode: `<div className='bg-[#FF9898] border border-[#FD0000] rounded-full p-2 w-96 text-black flex items-center gap-1'>
                  <Icon icon="codicon:error" className='text-2xl mx-2' />
                  <p className='text-sm font-bold'>This action may have undesired consequences.</p>
                </div>`,
    },
    {
      htmlCode: `<div class='bg-[#f77fbf] border border-[#C71585]  rounded-full p-2 w-96 text-black flex items-center gap-1'>
                  <iconify-icon class='text-xl' icon="mingcute:notification-line"></iconify-icon>
                  <p class='text-sm font-bold'>You have a new message!</p>
               </div>`,
      jsxCode: `<div className='bg-[#f77fbf] border border-[#C71585] rounded-full p-2 w-96 text-black flex items-center gap-1'>
                  <Icon icon="mingcute:notification-line" className='text-2xl mx-2' />
                  <p className='text-sm font-bold'>You have a new message!</p>
                </div>`,
    },
    {
      htmlCode: `<div class='bg-[#f77fbf] border border-[#C71585]  rounded-full p-2 w-96 text-black flex items-center gap-1'>
                  <iconify-icon class='text-xl' icon="mflat-color-icons:ok"></iconify-icon>
                  <p class='text-sm font-bold'>You have a new message!</p>
               </div>`,
      jsxCode: `<div className='bg-[#f77fbf] border border-[#C71585] rounded-full p-2 w-96 text-black flex items-center gap-1'>
                  <Icon icon="mflat-color-icons:ok" className='text-2xl mx-2' />
                  <p className='text-sm font-bold'>You have a new message!</p>
                </div>`,
    },
   
  
    
  ];

  return (
    <div className='container px-2 py-4'>
      <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
        <SideBar />
        <div className="content mt-10 md:mt-2 px-2">
          <h2 className="text-3xl font-bold mb-2">Alerts</h2>
          <p className="text-[#9A9A9A] mb-6">Use custom buttons styles for actions in alerts, delete, and more.</p>

          <h3 className="mb-4">Alerts</h3>
          {alerts.map((alert, index) => (
            <div key={index} className='my-4'>
              <CustomCodeBlock htmlCode={alert.htmlCode} jsxCode={alert.jsxCode} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
