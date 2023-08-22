import Link from "next/link"
import { PostMetadata } from "../PostMetadata"
import Image from "next/image"

const BlogRecommendBox = (props: PostMetadata) => {
  return (
    <div className='mx-5 my-10' key={props.slug}>
        <Link href={`/blogs/${props.slug}`}>
          <Image src={props.img} alt='blog-thumbnail' width={100} height={100} />
          <h1 className='italic text-lg font-semibold'>{props.title.substring(0, 19)}...</h1>
          <p className='text-gray-400 font-light italic'>{props.date}</p>
          <p className='text-gray-500 font-light italic'>{props.subtitle.substring(0, 25)}...</p>
        </Link>
      </div>
  )
}

export default BlogRecommendBox