import React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar/Navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Navbar />{" "}
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer-content">
        © {new Date().getFullYear()}, Kristbjörg Óskarsdóttir
        {` `}
      </footer>
    </div>
  )
}

export default Layout
