import React from 'react';

import SitiesView from './Components/SitiesViewComponent';
import { Router, Route, browserHistory } from 'react-router';

import Stores from './Stores.js';

export default (stores) =>
{
    const loadSiteViewer = function(ns, replace) {
		stores.sites.load();
    };
    
    var stores = new Stores();

    return (
        <Router history={browserHistory}>
        <Route path="/" component={SitiesView} stores={stores}>
            <Route path='spb' component={SitiesView} store={stores.sites}/>
            <Route path='msk' component={SitiesView} store={stores.sites}/>
        </Route>
        </Router>
    )

    //onEnter={loadSiteViewer} store={stores.sites}
}