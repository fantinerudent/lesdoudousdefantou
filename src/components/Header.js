import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div id="header">
      <img id="header-img" src="../../owl.png" />
      <h2> Les Doudous de Fantou </h2>
      <ul id="nav-bar">
        <li>
          <Link to="#biography" className="nav-link">
            Qui suis-je ?
          </Link>
        </li>
        <li>
          <Link to="#products" className="nav-link">
            Créations
          </Link>
        </li>
        <li>
          <Link to="#contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
