import PostImage from "../../assets/images/PostsImages/BlogPost1Photo.png"
import {Icon} from '@iconify/react'
import { Link } from "react-router-dom"

export default function Post1() {
  return (
    <div>
      <div className="text-start">
        <Link to={"/blog"}>
          <button className="my-6 text-black px-4 py-2 rounded flex items-center font-bold gap-2"> 
          <Icon className="text-xs" icon="ep:arrow-left-bold" /> Go Back
          </button>
        </Link>
      </div>
    <div className="post-container mt-10">
        <p className="text-[#4c4c4c] font-normal text-lg my-8">January 02, 2024</p>
        
        <h2 className="font-extrabold text-2xl md:text-5xl mb-3 tracking-wide">Introducing CleveryteUI: Revolutionizing web development with tailwindCSS components</h2>
        <p className="mb-10 text-[#8b8b8b] text-lg">As we embark on the journey with CleveryteUI, we step into a realm of limitless possibilities. This component library marks a pivotal leap in website development, promising unparalleled speed and efficiency.</p>
        <hr className="my-5"/>
        <h2 className="font-bold text-2xl mb-4">¿Where to start?</h2>
        <p className="mb-4 text-[#4c4c4c] font-normal text-lg">
        CleveryteUI is a component library made with TailwindCSS. Its main goals are to increase the speed and efficiency of page development. We are looking for a fast and elegant alternative to be able to create components more easily and then give them the style you want.
        </p>
        <img className="p-10" src={PostImage} alt="Primer post" />
    </div>
    <div className="post-container mt-10">
    <h2 className="font-bold text-2xl mb-4">Ready-to-Use Components</h2>
        <p className="mb-4 text-[#4c4c4c] font-normal text-lg">
        CleveryteUI provides a wide array of ready-to-use components aligned with market-standard designs. These encompass buttons, cards, navigation bars, forms, and more. By copying and pasting the code of these components into your React project, you can swiftly integrate high-quality designs without the need to create them from scratch.
        </p>
        <p className="mb-4 text-[#4c4c4c] font-normal text-lg">
          The components in CleveryteUI are crafted with TailwindCSS, allowing straightforward customization through pre-defined classes. This means you can swiftly adjust styles, colors, and sizes of the components to suit the specific needs of your project without writing extensive additional CSS.
        </p>
        <p className="mb-4 text-[#4c4c4c] font-normal text-lg">
        By adhering to market standard designs, CleveryteUI will excel in component appearance and functionality. This ensures that the visual elements and interactions of your application follow a consistent line, enhancing the user experience and simplifying navigation within your site.
        </p>
        <p className="mb-4 text-[#4c4c4c] font-normal text-lg">
        The library includes detailed documentation describing each component and its use. In addition, it provides practical examples that demonstrate how to implement the components in a React project. This makes it easier for developers to understand how to use the components and reduces the time spent researching or guessing about their functionality.
        </p>
        <p className="mb-4 text-[#4c4c4c] font-normal text-lg">
        CleveryteUI is designed with current best practices and industry standards in mind. By integrating these components, your project will align with market trends and recommended practices, potentially enhancing its visual appeal and functionality right from the start.
        </p>
    </div>
    </div>
  )
}
