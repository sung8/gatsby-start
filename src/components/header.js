import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <div>
      <title>Welcome to my blog!</title>
      <h1>Welcome</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
