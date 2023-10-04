import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { formatDate } from '~/utils/helpers'
import styles from '~/styles/blog.css'

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


export function meta({data}) {
  if(!data) {
      return [
        {
          title: 'GuitarLA - Entry not found',
          description: `Guitars, guitars shop, entry not found`
      }
    ]
  }
  return [
        {
      title: `GuitarLA - ${data?.data[0]?.attributes.title}`,
      description: `Guitars, guitars shop, entry ${data.data[0].attributes.title}`
        }
    ]
}

export async function loader({params}) {
    const { postUrl } = params
    const post = await getPost(postUrl)
    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entry not found'
        })
    }
    return post
}


export default function Post() {
  const post = useLoaderData()
  const { title, content, image, publishedAt } = post?.data[0]?.attributes
  return (
    <article className='container post mt-3'>
        <img className="image" src={image?.data?.attributes?.url} alt={`${title} blog imagee`} />
            <div className="content">
                <h3>{title}</h3>
                <p className='date'>{formatDate(publishedAt)}</p>
                <p className="text">{content}</p>
            </div>
    </article>
  )
}
