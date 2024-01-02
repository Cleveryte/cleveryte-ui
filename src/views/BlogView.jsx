import PostPreview from "../components/PostPreview"
import PostImage1 from "../assets/images/PostsImages/BlogPost1Photo.png"

export default function BlogView() {
    return (
        <main className="container px-2 py-4">
            <div className="post-list grid grid-cols-2 gap-10">
                <div className="last-post my-4">
                    <PostPreview image={PostImage1} topic={"Development"} title={"The journey starts here"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet. Vestibulum vel turpis vitae risus lobortis pulvinar. Curabitur id consectetur neque, non bibendum lacus. Suspendisse potenti."} />
                </div>
                <div className="vertical-posts mt-4">
                    <PostPreview image={PostImage1} topic={"Development"} title={"The journey starts here"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet. Vestibulum vel turpis vitae risus lobortis pulvinar. Curabitur id consectetur neque, non bibendum lacus. Suspendisse potenti."} />
                    <PostPreview image={PostImage1} topic={"Development"} title={"The journey starts here"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet. Vestibulum vel turpis vitae risus lobortis pulvinar. Curabitur id consectetur neque, non bibendum lacus. Suspendisse potenti."} />
                    <PostPreview image={PostImage1} topic={"Development"} title={"The journey starts here"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus odio quam, convallis cursus turpis venenatis ut. Aliquam sed molestie massa. Sed tincidunt lectus viverra enim faucibus, a cursus ex laoreet. Vestibulum vel turpis vitae risus lobortis pulvinar. Curabitur id consectetur neque, non bibendum lacus. Suspendisse potenti."} />
            </div>
            </div>
        </main>
    )
}
