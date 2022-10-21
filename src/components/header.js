import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

function Header({ siteTitle }) {
  return (
    <nav className="py-2 px-4">
      <div className="max-w-5xl mx-auto flex items-center md:py-2 mt-2">
        <Link
          to={`/`}
          className="text-sky-500 text-xl font-semibold tracking-wider"
        >
          {siteTitle}
        </Link>
        <div
          className={`flex-grow flex items-center justify-end text-lg gap-4`}
        >
          <Link to={`/blog`} className="text-sky-500">
            Blog
          </Link>
          <Link to={`/#about`} className=" text-sky-500">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
