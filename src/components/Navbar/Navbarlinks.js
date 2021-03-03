import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 5px;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 18px;
  padding: 10px;
  border: 2px solid black;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #f9f871;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #000;
    font-weight: 900;
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #f9f871;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    border: none;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/portfolio">Portfolio</NavItem>
      <NavItem to="/blogIndex">Blog</NavItem>
      <NavItem to="/about">About me</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </>
  )
}

export default NavbarLinks
