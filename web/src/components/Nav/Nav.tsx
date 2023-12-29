import { Link, routes } from '@redwoodjs/router'

const Nav = ({ onLinkClick }) => {
  return (
    <div className="flex h-screen w-[460px] flex-col justify-between bg-supernova px-12 pb-12 pt-[160px]">
      <nav className="top-nav">
        <ul>
          <li>
            <Link to={routes.dashboard()} onClick={onLinkClick}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="#">Our Group</Link>
          </li>
          <li>
            <Link to={routes.wishlist()}>My Wish List</Link>
          </li>
        </ul>
      </nav>

      <nav className="bottom-nav">
        <div className="mb-2 font-condensed text-5xl uppercase text-spanishGreen">
          Past Events
        </div>
        <ul>
          <li>
            {/* <a href="#">
              <div className="text-2xl font-bold">Smith Christmas</div>
              <div>December 23, 2023</div>
            </a> */}
          </li>
          <li>
            {/* <a href="#">
              <div className="text-2xl font-bold">Smith Christmas</div>
              <div>December 23, 2023</div>
            </a> */}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
