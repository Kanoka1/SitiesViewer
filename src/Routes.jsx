import React from 'react';
import {Route, IndexRoute} from 'react-router';

import SitiesView from './Components/SitiesView'

export default () =>
{
    return (
        <Route path="/" component={App} stores={stores}>
            <IndexRoute component={About}/>
            <Route path="clones" component={SitiesView} />
        </Route>
    )
}