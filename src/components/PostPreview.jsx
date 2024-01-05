import { Link  } from 'react-router-dom';

export default function PostPreview({ size, title, topic, image, description, author, date, postId }) {
    let postContent;
  
    if (size === 'small') {
      postContent = (
        <div className="grid grid-cols-3 gap-4 mb-8">
            
              <div className="col-span-1 relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-md">
                  <Link to={`/blog/${postId}`}>
                    <img src={image} alt="Post" className="rounded-md object-cover w-full h-[8em] max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                  </Link>  
              </div>
              <div className="col-span-2">
                  <h4 className=" text-gray-600 text-sm font-bold">{topic}</h4>
                  <Link to={`/blog/${postId}`}>
                    <h2 className="dark:text-white text-black font-black text-lg hover:underline hover:underline-offset-4 hover:text-[#9C00B6]">{title}</h2>
                  </Link>  
                  <p className="text-gray-400 line-clamp-2 font-light mb-2">{description}</p>
                  <p><span className="font-bold text-[#9C00B6]">{author}</span> <span className="font-regular text-gray-300 ml-1">{date}</span></p>
              </div>
                   
        </div>
      );
    } else if (size === 'medium') {
      postContent = (
        <>
            <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-md">
              <Link to={`/blog/${postId}`}>
                <img src={image} alt="Post" className="rounded-md w-[50em] transition duration-300 ease-in-out hover:scale-110" />
              </Link>
            </div>
            <h4 className="text-gray-600 mt-4 text-lg font-bold">{topic}</h4>
            <Link to={`/blog/${postId}`}>
              <h2 className="dark:text-white text-black font-black text-xl md:text-4xl mb-1 hover:underline hover:underline-offset-4 hover:text-[#9C00B6]">{title}</h2>
            </Link>
            <p className="text-gray-500 font-light">{description}</p>
            <p className="mt-4"><span className="font-bold text-[#9C00B6]">{author}</span> <span className="dark:text-white font-regular text-gray-400 ml-1 ">{date}</span></p>
        </>
      );
    } else {
      postContent = (
        <>
            <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-md">
              <Link to={`/blog/${postId}`}>
                <img src={image} alt="Post" className="rounded-md w-full transition duration-300 ease-in-out hover:scale-110" />
              </Link>
            </div>
            <h4 className="text-gray-600 mt-4 text-lg font-bold ">{topic}</h4>
            <Link to={`/blog/${postId}`}>
              <h2 className="text-black font-black text-2xl md:text-5xl mb-1 hover:underline hover:underline-offset-4 hover:text-[#9C00B6]">{title}</h2>
            </Link>
            <p className="text-gray-500 font-light">{description}</p>
            <p className="mt-4 text-md text-[#9C00B6] mb-6"><span className="font-bold">{author}</span> <span className="font-regular text-gray-400 ml-4">{date}</span></p>
        </>
      );
    }
  
    return <article>{postContent}</article>;
  }
  