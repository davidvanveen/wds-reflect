import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App/';
import People from '../containers/People/';
import Person from '../containers/Person/';
import Claim from '../containers/Claim/Claim';
import Communities from '../containers/Hub/Communities/Communities';
import Community from '../containers/Hub/Community/Community';
import Welcome from '../containers/Welcome/Welcome';
import Pageloader from '../containers/Pageloader/';
import TicketPurchase from '../containers/TicketPurchase/TicketPurchase';

import Hub from '../containers/Hub/Hub';
import YourSchedule from '../containers/Hub/YourSchedule/YourSchedule';
import Events from '../containers/Hub/Events/Events';

import EnsureLoggedIn from '../containers/EnsureLoggedIn/EnsureLoggedIn';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Pageloader} />
    <Route path="/main" component={Pageloader} />
    <Route path="/people" component={People} />
    <Route path="/person/:id" component={Person} />
    <Route path="/claim/:id" component={Claim} />
    <Route path="/welcome/:id" component={Welcome} />
    <Route path="/be-there" component={TicketPurchase} />
    <Route path="/id" component={Person} />
    <Route component={EnsureLoggedIn}>
      <Route path="/claim" component={Claim} />
      <Route path="/communities" component={Communities} />
      <Route path="/community/:id" component={Community} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/hub" component={Hub} />
      <Route path="/your-schedule" component={YourSchedule} />
      <Route path="/events" component={Events} />
    </Route>
    <Route path="*" component={Pageloader} />
  </Route>
);

export default routes;
