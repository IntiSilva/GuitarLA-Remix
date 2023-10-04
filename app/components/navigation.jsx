import { Link, useLocation } from '@remix-run/react'
import cartImage from "../../public/img/cart.png"

function Navigation() {

    const location = useLocation()

    return (
        <nav className="navigation">
            <Link
                to="/"
                className={location.pathname === '/' ? 'active' : '' }
            >Home</Link>
            <Link
                to="/about-us"
                className={location.pathname === '/about-us' ? 'active' : '' }
            >About Us</Link>
            <Link
                to="/guitars"
                className={location.pathname === '/guitars' ? 'active' : '' }
            >Shop</Link>
            <Link
                to="/blog"
                className={location.pathname === '/blog' ? 'active' : '' }
            >Blog</Link>
            <Link
                to="/cart"
                className={location.pathname === '/cart' ? 'active' : '' }
            >
                <img src={cartImage} alt='shopping cart' />
            </Link>
        </nav>
    )
}

export default Navigation