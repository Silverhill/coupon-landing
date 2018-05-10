import React, { PureComponent } from 'react';
import Link from 'next/link';

import "./index.scss";

class Navbar extends PureComponent {
  render() {
    return (
      <div>
        <header className="menu">
          <input id="menu__btn" type="checkbox" />
          <label className="menu__btnLabel" htmlFor="menu__btn">Menu</label>
          <nav className="menu__bar">
            <ul className="bar__container">
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

export default Navbar;