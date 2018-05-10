import React, { PureComponent } from 'react';
import Link from 'next/link';

import "./index.scss";

class Navba extends PureComponent {
  render() {
    return (
      <div>
        <header className="menu">
          <input type="checkbox" id="btn-menu"/>
          <label For="btn-menu" className="btn-label">Menu</label>
          <nav className="menuBarra">
            <ul className="menuContainer">
              <li>
                <Link prefetch href="http://localhost:3000/">
                  <a className="link">Home</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/about">
                  <a className="link">About</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="http://localhost:2368/">
                  <a className="link">Blog</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/contact">
                  <a className="link">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

      </div>

    );
  }
}

export default Navba;