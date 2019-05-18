import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      
      // position: "fixed",
      background: `trasparent`,
      border: `5px solid rgba(245, 84, 157, 0.486)`,
      width:'99.5%',
    }}
  >
    <div
      style={{
        
        margin: `0 auto`,
        maxWidth: 960,
        padding: `3.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontSize: 75,
            color: `#292323`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
