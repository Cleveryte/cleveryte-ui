import PostPreview from "../components/PostPreview"
import PostImage1 from "../assets/images/PostsImages/BlogPost1Photo.png"

export default function BlogView() {
    return (
        <main className="container p-4">
            <div className="post-list grid lg:grid-cols-7 gap-10">
                <div className="last-post my-4 col-span-4 dark:text-white">
                    <PostPreview postId={"1"}  size={"big"} image={PostImage1} topic={"Development"} title={"Introducing CleveryteUI: Revolutionizing web development with tailwindCSS components"} author={"Cleveryte"} date={"January 02, 2024"} description={"Embarking on CleveryteUI, we stand at the brink of a new journey. Today marks the initiation of the development phase for this components library, a pivotal step toward building websites with unprecedented speed and efficiency."} />
                </div>
                <div className="vertical-posts mt-4 col-span-3">
                    <PostPreview postId={""}  size={"small"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Embarking on CleveryteUI, we stand at the brink of a new journey. Today marks the initiation of the development phase for this components library, a pivotal step toward building websites with unprecedented speed and efficiency."} />
                    <PostPreview postId={""}  size={"small"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Embarking on CleveryteUI, we stand at the brink of a new journey. Today marks the initiation of the development phase for this components library, a pivotal step toward building websites with unprecedented speed and efficiency."} />
                    <PostPreview postId={""}  size={"small"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Embarking on CleveryteUI, we stand at the brink of a new journey. Today marks the initiation of the development phase for this components library, a pivotal step toward building websites with unprecedented speed and efficiency."} />
                    <PostPreview postId={""}  size={"small"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Embarking on CleveryteUI, we stand at the brink of a new journey. Today marks the initiation of the development phase for this components library, a pivotal step toward building websites with unprecedented speed and efficiency."} />
                    
                </div>
            </div>

            <hr className="mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <PostPreview postId={""}  size={"medium"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Embarking on CleveryteUI, we stand at the brink of a new journey. Today marks the initiation of the development phase for this components library, a pivotal step toward building websites with unprecedented speed and efficiency."} />
                <PostPreview postId={""}  size={"medium"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Embarking on CleveryteUI, we stand at the brink of a new journey. Today marks the initiation of the development phase for this components library, a pivotal step toward building websites with unprecedented speed and efficiency."} />
            </div>
            
        </main>
    )
}
