import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WishlistPage = () => {
  return (
    <>
      <MetaTags title="Wishlist" description="Wishlist page" />

      <h1>WishlistPage</h1>
      <p>
        Find me in <code>./web/src/pages/WishlistPage/WishlistPage.tsx</code>
      </p>
      <p>
        My default route is named <code>wishlist</code>, link to me with `
        <Link to={routes.wishlist()}>Wishlist</Link>`
      </p>
    </>
  )
}

export default WishlistPage
