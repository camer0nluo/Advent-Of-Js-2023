import Footer from 'src/components/Footer/Footer'
import Hamburger from 'src/components/Hamburger/Hamburger'
import MyAccount from 'src/components/MyAccount/MyAccount'
import Nav from 'src/components/Nav/Nav'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  const [opened, setOpened] = React.useState(false)
  return (
    <>
      <main className="bg-interior">
        <aside className="col-span-4 bg-no-repeat pb-10">
          <div>
            <div className="nav-button">
              <Hamburger
                handleClick={() => {
                  setOpened(!opened)
                }}
              />
            </div>
            {opened && (
              <div className="nav-container">
                <Nav />
              </div>
            )}
          </div>
          <img src="/images/bg__interior.svg" alt="" />
          <img
            src="/images/logo__secret-santa.svg"
            alt="Secret Santa"
            className="absolute top-[7vw] w-[25vw]"
          />
        </aside>

        <div className="col-span-8 pr-12 pt-7">
          <div className="flex justify-end">
            <MyAccount />
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default InteriorLayout
