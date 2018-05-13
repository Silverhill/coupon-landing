import React, { PureComponent } from 'react';
import Link from 'next/link';

import Navbar from '../components/Navba/Navbar';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default Home;