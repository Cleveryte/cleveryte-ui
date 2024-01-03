import { useParams } from "react-router-dom";
import Post1 from "./Posts/Post1";

export default function BlogPostView() {
  const { id } = useParams();

  let content;

  switch (id) {
    case "1":
      content = <Post1 />;
      break;

    default:
      content = <div>Post not found</div>;
      break;
  }

  return (
    <div className="container mt-4 px-4">
      {content}
    </div>
  );
}
