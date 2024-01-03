import {useParams} from "react-router-dom";

export default function BlogPostView() {

    const {id} = useParams();

    return (
        <div className="container mt-4 px-4">
            Post {id}
        </div>
    )
}
