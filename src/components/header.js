import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1c1c1c`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `.75rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, display: 'flex', justifyContent: 'center' }}>
        <Link
          to="/"
          style={{
            color: `#ffffff`,
            textDecoration: `none`,
          }}
        >
	~Lust~
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
