import React from "react"
import PropTypes from "prop-types"
import "../styles/header.css"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
    <header className="header">
        <div className="header-author">
            <h2 className="header-author-text">
                <Link to="/" className="header-text">
                    {siteTitle}
                </Link>
            </h2>
        </div>
    </header >
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: `ProAca Web Site`,
}

export default Header