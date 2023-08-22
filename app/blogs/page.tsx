import Link from 'next/link'
import getPostMetadata from '../../helpers/metadata-gen'
import BlogPreview from '../../components/web/BlogPreview'

const BlogPage = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((post) => (
      <BlogPreview key={post.slug} {...post} />
  ))
  return (
      <div className='w-full'>
          <h1 className='font-bold text-4xl italic text-center my-20'>FusionClips AI Blogs</h1>
        <div className='flex justify-center'>
          {postPreviews}
        </div>
      </div>
    )
}

export default BlogPage