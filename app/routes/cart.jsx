import { useEffect, useState } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/cart.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta() {
    return [
        {
        title: 'GuitarLA - Shopping Cart',
        description: 'Guitars Shop, music, blog, shopping cart'
    }
]
}

const Cart = () => {

    const [ total, setTotal] = useState(0)
    const { cart, updateQuantity, deleteGuitar } = useOutletContext()

    useEffect(() => {
        const totalEstimate = cart.reduce( (total, product) => total + (product.quantity * product.price), 0)
        setTotal(totalEstimate)
    }, [cart])

  return (
    <ClientOnly fallback={'Loading...'}>
        {() => (
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>

            <div className="content">
                <div className='cart'>
                    <h2>Items</h2>

                    {cart?.length === 0 ? 'Empty Cart' : (
                        cart?.map ( product => (
                            <div key={product.id} className='product'>
                                <div>
                                    <img src={product.image} alt={`${product.name} product imagee`}/>
                                    </div>

                                <div>
                                    <p className='name'>{product.name}</p>
                                    <p>Quantity: </p>

                                    <select
                                    value={product.quantity}
                                    className='select'
                                    onChange={e => updateQuantity({
                                        quantity: +e.target.value,
                                        id: product.id
                                    })}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>

                                    <p className='price'>$ <span>{product.price}</span></p>
                                    <p className='subtotal'>Subtotal: $ <span>{product.quantity * product.price}</span></p>

                                </div>

                                    <button
                                        type='button'
                                        className='btn_delete'
                                        onClick={() => deleteGuitar(product.id)}
                                    >X</button>
                                </div>
                        ))
                    )}
                </div>

            <aside className="summary">
                <h3>Order Summary</h3>
                <p>Payment total: ${total}</p>
            </aside>

            </div>

        </main>
        )}
    </ClientOnly>
  )
}

export default Cart