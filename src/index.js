import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Stores from './Stores.js';
import routes from './Routes';

import SitiesView from './Components/SitiesViewComponent';
import { Router, browserHistory  } from 'react-router';

var stores = new Stores();

ReactDOM.render((
    <Router history={browserHistory} routes={routes(stores)}>
    
    </Router>
    //    <Redirect from="/kek" to=""/>
    //<Routes />
), document.getElementById('root'));
registerServiceWorker();
