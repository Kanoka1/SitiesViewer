import React from 'react';

import SitiesView from './Components/SitiesViewComponent';
import HostsView from './Components/HostsViewDialog';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import Stores from './Stores.js';

export default (stores) =>
{
    const siteview = function(ns, replace) {
		stores.sites.load();
	}

    return (
       
        <Route path="/" onEnter={siteview} component={SitiesView} stores={stores} >
            <Route path='hostview/:hosts/:city' onEnter={siteview} component={{ inner : HostsView}} store={stores}/>
        </Route>
    )
}