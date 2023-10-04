import image from '../../public/img/about-us.jpg'
import styles from '~/styles/about-us.css'

export function meta() {
  return [
    {
      title: 'GuitarLA - About Us',
      description: 'Guitars shop, music blog'
  }
]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]
}

function AboutUs() {
    return (
        <main className="container about-us">
            <h2 className="heading">About Us</h2>

            <div className="content">
                <img src={image} alt="about us imagee"/>

                <div>
                    <p>Etiam accumsan est et feugiat dictum. Praesent urna purus, finibus vitae maximus id, gravida a erat. Vivamus aliquet dapibus odio id tincidunt. Quisque commodo lacinia lorem, nec suscipit ligula mollis nec. In pulvinar purus maximus elit sodales feugiat. Sed id turpis risus. Suspendisse neque tortor, tincidunt porttitor risus non, ultrices vehicula eros.</p>

                    <p>Etiam accumsan est et feugiat dictum. Praesent urna purus, finibus vitae maximus id, gravida a erat. Vivamus aliquet dapibus odio id tincidunt. Quisque commodo lacinia lorem, nec suscipit ligula mollis nec. In pulvinar purus maximus elit sodales feugiat. Sed id turpis risus. Suspendisse neque tortor, tincidunt porttitor risus non, ultrices vehicula eros.</p>
                </div>
            </div>
        </main>
    )
}

export default AboutUs