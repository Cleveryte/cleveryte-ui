export default function PostPreview({ size, title, topic, image, description, author, date }) {
    let postContent;
  
    if (size === 'small') {
      postContent = (
        <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="col-span-1">
                <img src={image} alt="Post" className="rounded-md object-cover w-full h-[8em]" />
            </div>
            <div className="col-span-2">
                <h4 className="text-gray-600 text-sm font-bold">{topic}</h4>
                <h2 className="text-black font-black text-lg ">{title}</h2>
                <p className="text-gray-400 line-clamp-2 font-light mb-2">{description}</p>
                <p><span className="font-bold text-[#9C00B6]">{author}</span> <span className="font-regular text-gray-300 ml-1">{date}</span></p>
            </div>            
        </div>
      );
    } else if (size === 'medium') {
      postContent = (
        <>
            <img src={image} alt="Post" className="rounded-md w-[50em]" />
            <h4 className="text-gray-600 mt-4 text-lg font-bold">{topic}</h4>
            <h2 className="text-black font-black text-4xl mb-1">{title}</h2>
            <p className="text-gray-500">{description}</p>
            <p className="mt-4"><span className="font-bold text-[#9C00B6]">{author}</span> <span className="font-regular text-gray-400 ml-1">{date}</span></p>
        </>
      );
    } else {
      postContent = (
        <>
            <img src={image} alt="Post" className="rounded-md w-full" />
            <h4 className="text-gray-600 mt-4 text-lg font-bold">{topic}</h4>
            <h2 className="text-black font-black text-5xl mb-1">{title}</h2>
            <p className="text-gray-500">{description}</p>
            <p className="mt-4 text-md text-[#9C00B6] mb-6"><span className="font-bold">{author}</span> <span className="font-regular text-gray-400 ml-4">{date}</span></p>
        </>
      );
    }
  
    return <article>{postContent}</article>;
  }
  