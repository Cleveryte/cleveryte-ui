import { Link  } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function ContentNavButtons({previousLink, nextLink}) {
    
    function capitalizeWord(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    let previousBtn;
    let nextBtn;

    let previousText = capitalizeWord(previousLink.substring(1));
    let nextText = capitalizeWord(nextLink.substring(1));


    if(previousLink != "") {
        previousBtn = 
            <>
                <Link to={previousLink}>
                    <button className="my-6 text-black py-2 rounded flex items-center float-start">
                        <Icon icon="teenyicons:left-outline" width="13" height="13" className="mr-1" /> {previousText} 
                    </button>
                </Link>
            </>;
    }

    if(nextLink != "") {
        nextBtn = 
            <>
                <Link to={nextLink}>
                    <button className="my-6 text-black py-2 rounded flex items-center float-end">
                        {nextText} <Icon icon="teenyicons:right-outline" width="13" height="13" className="ml-1" /> 
                    </button>
                </Link>
            </>;
    }


    return (
        <div className="grid grid-cols-2">
            <div className="left text-start">
                {previousBtn}
            </div>
            <div className="right text-end">
                {nextBtn}
            </div>
        </div>
    )
}
