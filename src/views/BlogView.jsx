import PostPreview from "../components/PostPreview"
import PostImage1 from "../assets/images/PostsImages/BlogPost1Photo.png"

export default function BlogView() {
    return (
        <main className="container p-4">
            <div className="post-list grid lg:grid-cols-7 gap-10">
                <div className="last-post my-4 col-span-4">
                    <PostPreview size={"big"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet."} />
                </div>
                <div className="vertical-posts mt-4 col-span-3">
                    <PostPreview size={"small"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet."} />
                    <PostPreview size={"small"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet."} />
                    <PostPreview size={"small"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet."} />
                    <PostPreview size={"small"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet."} />
                </div>
            </div>

            <hr className="mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <PostPreview size={"medium"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet."} />
                <PostPreview size={"medium"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet."} />
                <PostPreview size={"medium"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet."} />
                <PostPreview size={"medium"} image={PostImage1} topic={"Development"} title={"The journey starts here"} author={"Cleveryte"} date={"January 02, 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet."} />
            </div>
            
        </main>
    )
}
