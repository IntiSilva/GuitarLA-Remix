import { useLoaderData } from '@remix-run/react'
import PostsList from '~/components/posts-list'
import { getPosts } from '~/models/posts.server'


export function meta() {
  return [
    {
    title: 'GuitarLA - Our Blog',
    description: 'GuitarLA, Music blog and guitars shop'
  }
]
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  return (
    <PostsList
        posts={posts}
    />
  )
}

export default Blog