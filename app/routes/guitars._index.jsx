import { useLoaderData } from '@remix-run/react'
import { getGuitars } from '~/models/guitars.server'
import GuitarsList from '~/components/guitars-list'

export function meta() {
  return [
    {
    title: 'GuitarLA - Guitars Shop',
    description: 'GuitarLA - Our guitars collection'
    }
  ]
}

export async function loader() {
    const guitars = await getGuitars()
    return guitars.data
}

function Shop() {
  const guitars = useLoaderData()
  return (
      <GuitarsList
        guitars={guitars}
      />
  )
}

export default Shop