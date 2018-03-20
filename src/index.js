import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Stores from './Stores.js';
import Routes from './Routes';

import SitiesView from './Components/SitiesViewComponent';

ReactDOM.render((
    <Routes />
), document.getElementById('root'));
registerServiceWorker();
