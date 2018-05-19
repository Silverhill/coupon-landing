import React, { PureComponent } from 'react';
import Link from 'next/link';

import styles from "./Navbar.scss";


const defaults = {
  links: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Blog',
      href: 'http://localhost:2368/',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]
}

class Navbar extends PureComponent {
  render() {
    return (
      <div>
        <header className={styles.menu}>
          <input className={styles.menuBtn} type="checkbox" />
          <label className={styles.btnLabel} htmlFor="menu__btn">Menu</label>
          <nav className={styles.bar}>
            <ul className={styles.barContainer}>
            {(defaults.links || []).map((link, i) => {
              return (
                <li>
                  <Link prefetch href={link.href}>
                    <a className={styles.link}>{link.label}</a>
                  </Link>
                </li>
              )
            })}
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;