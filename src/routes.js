import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Header/Navigation';

import Landing from './components/Landing/Landing';
import Lend from './components/Lend/Lend';
import Barrow from './components/Barrow/Barrow';
import About from './components/About/About';
import Help from './components/Help/Help';
import Career from './components/Career/Career';
import SiteMap from './components/SiteMap/SiteMap';

import Foot from './components/Footer/Foot';
import { Privacy, Terms } from './components/Footer/Legal';

export default(
  <div>
    <Navigation />
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/Lend' component={Lend} />
      <Route path='/Barrow' component={Barrow} />
      <Route path='/About' component={About} />
      <Route path='/Help' component={Help} />
      <Route path='/Career' component={Career} />
      <Route path='/SiteMap' component={SiteMap} />
      <Route path='/Legal/Privacy' component={Privacy} />
      <Route path='/Legal/Terms' component={Terms} />
    </Switch>
    <Foot />
  </div>
)