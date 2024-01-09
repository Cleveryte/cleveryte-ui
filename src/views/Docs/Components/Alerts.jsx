import SideBar from '../../../components/SideBar';
import CustomCodeBlock from '../../../components/CustomCodeBlock';
import AlertsCard from '../../../code/AlertsCard.json'
import { Icon } from '@iconify/react';

export default function Alerts() {
  

  return (
    <div className='container px-2 py-4'>
      <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
        <SideBar />
        <div className="content mt-10 md:mt-2 px-2">
          <h2 className="text-3xl font-bold mb-2">Alerts</h2>
          <p className="text-[#9A9A9A] mb-6">Use custom buttons styles for actions in alerts, delete, and more.</p>

          <h3 className="mb-4">Alerts</h3>
          
            <div className='my-4'>
            <CustomCodeBlock 
                  htmlPreview={AlertsCard.info_alert.htmlPreview} 
                  htmlFormatted={AlertsCard.info_alert.htmlFormatted} 
                  jsxFormatted={AlertsCard.info_alert.jsxFormatted} 
                />  
                <CustomCodeBlock 
                  htmlPreview={AlertsCard.success_alert.htmlPreview} 
                  htmlFormatted={AlertsCard.success_alert.htmlFormatted} 
                  jsxFormatted={AlertsCard.success_alert.jsxFormatted} 
                />   
                <CustomCodeBlock 
                  htmlPreview={AlertsCard.warning_alert.htmlPreview} 
                  htmlFormatted={AlertsCard.warning_alert.htmlFormatted} 
                  jsxFormatted={AlertsCard.warning_alert.jsxFormatted} 
                />  
                 <CustomCodeBlock 
                  htmlPreview={AlertsCard.error_alert.htmlPreview} 
                  htmlFormatted={AlertsCard.error_alert.htmlFormatted} 
                  jsxFormatted={AlertsCard.error_alert.jsxFormatted} 
                />  
                 <CustomCodeBlock 
                  htmlPreview={AlertsCard.message_alert.htmlPreview} 
                  htmlFormatted={AlertsCard.message_alert.htmlFormatted} 
                  jsxFormatted={AlertsCard.message_alert.jsxFormatted} 
                />  
                
            </div>
          
        </div>
      </div>
    </div>
  );
}
