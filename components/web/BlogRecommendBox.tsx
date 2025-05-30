import Link from "next/link"
import { PostMetadata } from "../PostMetadata"
import Image from "next/image"

const BlogRecommendBox = (props: PostMetadata) => {
  return (
    <div className='mx-5 my-10' key={props.slug}>
        <Link href={`/blogs/${props.slug}`}>
          <Image src={props.img} alt='blog-thumbnail' width={400} height={400} />
          <h1 className='italic text-lg font-semibold'>{props.title.substring(0, 48)}...</h1>
          <p className='text-gray-400 font-light italic'>{props.date}</p>
          <p className='text-gray-500 font-light italic'>{props.subtitle.substring(0, 48)}...</p>
        </Link>
      </div>
  )
}

export default BlogRecommendBox