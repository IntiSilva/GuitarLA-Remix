import { useEffect, useState } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Remix" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {
  //in the line below, if the code is in the server then returns null, if not then gets the cart
  const cartLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) ?? []
      : null;
  const [cart, setCart] = useState(cartLS);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (guitar) => {
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      //iterate over the array and identify duplicated element
      const updatedCart = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          //overwrite quantity
          guitarState.quantity = guitar.quantity;
        }
        return guitarState;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, guitar]);
    }
  };

  const updateQuantity = (guitar) => {
    const updatedCart = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.quantity = guitar.quantity;
      }
      return guitarState;
    });
    setCart(updatedCart);
  };

  const deleteGuitar = (id) => {
    const updatedCart = cart.filter((guitarState) => guitarState.id !== id);
    setCart(updatedCart);
  };
  return (
    <Document>
      <Outlet
        context={{
          addCart,
          cart,
          updateQuantity,
          deleteGuitar,
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className="error">
          {error.status} {error.statusText}
        </p>
        <Link className="error-link" to="/">
          You may want to go back to the home page
        </Link>
      </Document>
    );
  }
}
