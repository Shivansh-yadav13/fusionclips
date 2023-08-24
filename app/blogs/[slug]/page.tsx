import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getPostMetadata, getSinglePageMetadata } from '../../../helpers/metadata-gen'
import BlogPreview from '../../../components/web/BlogPreview'
import Image from 'next/image'
import Link from 'next/link'
import BlogRecommendBox from '../../../components/web/BlogRecommendBox'
import { Metadata } from 'next'

const getPostContent = (slug: string) => {
  const folder = `posts/`
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf-8")
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata(params: any): Promise<Metadata> {
  const post = getSinglePageMetadata(params.params.slug);
  return { 
    title: post.title,
    description: post.subtitle,
    alternates: {
      canonical: `https://www.fusionclips.pro/blogs/${post.slug}`,
    },
    verification: {
      google: "google-site-verification=Qo7kzugZ6Qh4lkWhT-LxDdoxgxrDUc2KmRevHHURVaU"
    }
  }
}

const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug)


  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((post) => (
      <BlogRecommendBox key={post.slug} {...post} />
  ))

  return (
    <div className='flex justify-around mt-20'>
      <div className=''>
        <article className='prose xl:prose-xl'>
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
      <div className='sticky top-0'>
        <h1 className='font-semibold italic text-2xl text-center'>Read More Latest Articles</h1>
        {postPreviews}
      </div>
    </div>
  )
}

export default PostPage