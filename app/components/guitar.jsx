import { Link } from '@remix-run/react'
export default function Guitar({guitar}) {

    const { description, image, price, url, name } = guitar


    return (
        <div className="guitar">
            <img src={image.data.attributes.formats.medium.url} alt={`${name} guitar imagee`} />
            <div className="content">
                <h3>{name}</h3>
                <p className="description">{description}</p>
                <p className="precio">${price}</p>

                <Link className='link' to={`/guitars/${url}`}>See product</Link>
            </div>
        </div>
    )
}
