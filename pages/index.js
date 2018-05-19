import React, { Component } from 'react';
import Link from 'next/link';

import Navbar from '../components/Navbar/Navbar';
import AllCampaigns from '../components/AllCampaigns/AllCampaigns';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AllCampaigns />
      </div>
    );
  }
}

export default Home;