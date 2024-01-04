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
        
        <h2 className="post-title font-extrabold text-2xl md:text-5xl mb-2">The journey starts here</h2>
        <p className="mb-10 text-[#9A9A9A]">Embarking on CleveryteUI, we stand at the brink of a new journey. Today marks the initiation of the development phase for this components library, a pivotal step toward building websites with unprecedented speed and efficiency.</p>


        <hr className="my-5" />
        
        <h2 className="font-bold text-xl mb-4">First Steps</h2>

        <p className="mb-4 text-[#9A9A9A]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum condimentum nunc, ac eleifend dolor cursus sed. Praesent ante nunc, efficitur vitae metus eu, fermentum blandit massa. Nulla facilisi. Cras diam dui, egestas lobortis auctor in, faucibus sodales lacus. Nam sem tellus, tristique sit amet tincidunt et, sollicitudin nec massa. Aliquam lectus arcu, congue vitae suscipit eget, congue at ligula. Suspendisse consectetur vel magna vel tristique. Vestibulum tempus nulla vitae velit viverra facilisis a id augue. Sed vel feugiat nulla. Ut sit amet elit placerat quam bibendum convallis tempor ac tortor. Donec quis ligula auctor, dictum quam non, rutrum libero. Aliquam risus lectus, interdum eu purus at, gravida suscipit lectus. Pellentesque ex orci, imperdiet ut ex et, lacinia scelerisque justo. Cras vitae varius lorem. In molestie sed magna quis iaculis.</p>
    </div>
    </div>
  )
}
