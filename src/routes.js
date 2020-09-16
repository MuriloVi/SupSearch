import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";

//containersImport
import Homepage from './Containers/Homepage/Homepage'
import Supage from './Containers/Supage/Supage'


const Routes = () => (

    <BrowserRouter >
        < Switch >
            <Route exact path="/" component={Homepage} />
            <Route exact path="/super/:id" component={Supage} />
        </Switch>
    </BrowserRouter>

);

export default Routes;