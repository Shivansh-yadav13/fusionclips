import Link from "next/link"
import { PostMetadata } from "../PostMetadata"
import Image from "next/image"

const BlogPreview = (props: PostMetadata) => {
  return (
    <div className="p-5 w-fit mx-auto">
      <Link href={`/blogs/${props.slug}`}>
        <Image src={props.img} alt="blog-thumbnail" width={500} height={500} />
          <h2 className="font-bold text-2xl italic">{props.title.length >= 40 ? `${props.title.substring(0, 40)}...` : props.title}</h2>
          <p className="text-gray-400">{props.date}</p>
        <p className="text-xl italic text-gray-500">{props.subtitle.length >= 54 ? `${props.subtitle.substring(0, 54)}...`: props.subtitle}</p>
      </Link>
    </div>
  )

}

export default BlogPreview