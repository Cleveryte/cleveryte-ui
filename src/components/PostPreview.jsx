export default function PostPreview({size, title, topic, image, description }) {
  return (
    <article>
        <img src={image} alt="Post" className="rounded-md w-[50em]" />
        <h4 className="text-gray-600 mt-4 text-lg font-bold">{topic}</h4>
        <h2 className="text-black font-black text-5xl mb-1">{title}</h2>
        <p className="text-gray-500">{description}</p>
    </article>
  )
}
