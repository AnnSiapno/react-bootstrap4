import React from 'react'

export const Navbar = ({navbarType="justify-content-end", children}) => (
  <ul className={`nav ${navbarType}`}>
    { children }
  </ul>
)
