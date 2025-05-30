import fs from 'fs'
import matter from 'gray-matter'
import { PostMetadata } from '../components/PostMetadata'

export const getSinglePageMetadata = (slug: string): PostMetadata => {
  // const folder = 'posts/'
  // const files = fs.readdirSync(folder)
  // const markdownPosts = files.filter((file) => file.endsWith(".md"))

  const fileContent = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
  const matterResult = matter(fileContent)
  return {
    title: matterResult.data.title,
      date: matterResult.data.data,
      subtitle: matterResult.data.subtitle,
      img: matterResult.data.img,
      slug: slug
  }
}

export const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith(".md"))
  
  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const matterResult = matter(fileContent)
    return {
      title: matterResult.data.title,
      date: matterResult.data.data,
      subtitle: matterResult.data.subtitle,
      img: matterResult.data.img,
      slug: fileName.replace(".md", "")
    }
  })
  return posts
}

export default getPostMetadata