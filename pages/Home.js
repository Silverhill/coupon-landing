import React, { PureComponent } from 'react';
import Link from 'next/link'

// Componentes
import Blog from './Blog';

// Estilos
import "./styles.scss"

class Home extends PureComponent {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link href='./Home'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='./Blog'>
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className='example'>BIENVENIDO <br/> LANDING PAGE CUPON</h1>
      </div>
    );
  }
}

export default Home;