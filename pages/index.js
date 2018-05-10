import React, { PureComponent } from 'react';
import Link from 'next/link';

//Components
import Navba from '../components/Navba/Navba';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <Navba />
      </div>
    );
  }
}

export default Home;