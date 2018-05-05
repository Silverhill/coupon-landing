import React, { PureComponent } from 'react';
import Link from 'next/link'

//Componentes
import Home from './Home';

class Blog extends PureComponent {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link href='./Home'>
                Home
              </Link>
            </li>
            <li>
              <Link href='./Blog'>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <h1>Blog Cupón</h1>
        </div>
      </div>
    );
  }
}

export default Blog;