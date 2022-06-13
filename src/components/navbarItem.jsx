import React from "react"

const NavbarItem = ({
  href,
  title,
}) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {title}
      </a>
    </li>
  )
}

export default NavbarItem
