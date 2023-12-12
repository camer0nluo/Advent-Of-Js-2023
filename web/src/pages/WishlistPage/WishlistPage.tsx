import { DateField, Form, Label, Submit, TextField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Header from 'src/components/Header/Header'
import WishListField from 'src/components/WishListField/WishListField'

const WishlistPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Wishlist" description="Wishlist page" />
      <div className="container	 mx-auto">
        <Header heading="Wish List" className="text-white" />

        <Header
          heading="Make your list and check it twice."
          className=" text-white"
        />
      </div>
      <p>
        <Form onSubmit={onSubmit}>
          <WishListField
            roundButton={{
              icon: '/images/plus.svg',
              alt: 'add',
              className: 'bg-white',
            }}
            name="wish"
            number={1}
          />
          <br />
          <WishListField
            roundButton={{
              icon: '/images/plus.svg',
              alt: 'add',
              className: 'bg-white',
            }}
            name="wish"
            number={2}
          />{' '}
          <br />
          <WishListField
            roundButton={{
              icon: '/images/plus.svg',
              alt: 'add',
              className: 'bg-white',
            }}
            name="wish"
            number={3}
          />{' '}
          <br />
          {/* My default route is named <code>wishlist</code>, link to me with `
          <Link
            to={routes.wishlist({
              userId: 'ae082917-b085-4dfe-90f3-e81f810a1370',
            })}
          >
            Wishlist
          </Link> */}
          `{' '}
          <Submit
            style={{ width: '60%', marginBottom: '10px' }}
            className="
    w-full
  rounded-full bg-supernova py-5 font-handwriting text-3xl uppercase text-black"
          >
            Submit
          </Submit>
        </Form>
      </p>
    </>
  )
}

export default WishlistPage
