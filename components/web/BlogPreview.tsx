import Link from "next/link"
import { PostMetadata } from "../PostMetadata"
import Image from "next/image"

const BlogPreview = (props: PostMetadata) => {
  return (
    <div className="w-2/12 p-5">
      <Link href={`/blogs/${props.slug}`}>
        <Image src={props.img} alt="blog-thumbnail" width={500} height={500} />
          <h2 className="font-bold text-2xl italic">{props.title}</h2>
          <p className="text-gray-400">{props.date}</p>
        <p className="text-xl italic text-gray-500">{props.subtitle}</p>
      </Link>
    </div>
  )

}

export default BlogPreview