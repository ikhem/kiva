import React from 'react';
import Karousel from './components/Karousel';
import HowItWorks from './components/HowItWorks';

export default class Landing extends React.Component {
  render(){
    return (
      <div>
        <HowItWorks />
        <h1>Start Lending</h1>
        <h1>Follow Us</h1>
      </div>
    )
  }
}