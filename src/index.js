import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './Routes';
import Stores from './Stores.js';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import SitiesView from './Components/SitiesViewComponent';

var stores = new Stores();

const loadSiteViewer = function(ns, replace) {
    stores.sites.load();
};

ReactDOM.render((
     <BrowserRouter>
        <div>
            <Route path='' component={SitiesView} store={stores.sites}/>
            <Route path='msk' component={SitiesView} store={stores.sites}/>
        </div>
     </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
