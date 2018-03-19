import React from 'react';
import {Route, IndexRoute} from 'react-router';

import SitiesView from './Components/SitiesViewComponent';

export default (stores) =>
{
    const loadSiteViewer = function(ns, replace) {
		stores.sites.load();
    };
    
    return (
        <div>
            <Route path="/" component={SitiesView}  />
        </div>
    )

    //onEnter={loadSiteViewer} store={stores.sites}
}