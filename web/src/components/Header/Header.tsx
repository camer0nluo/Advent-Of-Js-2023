const Header = ({ className, heading }) => {
  return (
    <div className={` font-condensed text-7xl uppercase ${className}`}>
      {heading}
    </div>
  )
}

export default Header
