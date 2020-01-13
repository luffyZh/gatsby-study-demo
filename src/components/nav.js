import React from "react";
import { Link } from "gatsby";
import './layout.css';

const SiteNavigation = () => (
  <nav style={{ color: '#fff' }}>
    <Link
      to="/"
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? "red" : "#fff"
          }
        };
      }}
    >
      Home
    </Link>
    /
    <Link
      to="/about/"
      style={{ color: '#fff' }}
      activeStyle={{ color: "#000", background: '#fff' }}
    >
      About
    </Link>
  </nav>
)

export default SiteNavigation;