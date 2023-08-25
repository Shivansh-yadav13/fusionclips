import getPostMetadata from '../../helpers/metadata-gen'
import BlogPreview from '../../components/web/BlogPreview'

const BlogPage = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((post) => (
      <BlogPreview key={post.slug} {...post} />
  ))
  return (
      <div className='-z-20'>
        <h1 className='font-bold text-4xl italic text-center my-10'>FusionClips AI Blogs</h1>
        <div className='w-full xl:inline-grid xl:grid-cols-3'>
          {postPreviews}
        </div>
      </div>
    )
}

export default BlogPage