import React from 'react';
import { Link } from 'react-router-dom';

import './Foot.css';

export default class Foot extends React.Component {
  render(){
    return (
      <div className="Foot navbar-fixed-bottom">
        <div className="Nav">
          <Link to="/Barrow">Barrow</Link>
          <Link to="/About">About</Link>
          <Link to="/Help">Help</Link>
          <Link to="/Career">Careers</Link>
          <Link to="/SiteMap">Site map</Link>
        </div>
        <br />
        <div className="Nav-bottom">
          <Link to="/Legal/Privacy">Privacy policy</Link>
          <Link to="/Legal/Terms">Terms of use</Link>
        </div>
        <br />
        <div className="copyright">
          <p className="warning">Lending through Kiva involves risk of principle loss. Kiva does not guarantee repayment or offer a financial return on your loan.
          </p>
          <p>&copy Kiva. All rights reserved.</p>
        </div>
      </div>
    )
  }
}