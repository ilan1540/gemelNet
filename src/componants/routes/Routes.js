import React from 'react';
import {ReadFile} from '../excel/ReadFile'

import { Switch, Route } from 'react-router-dom';
import { ShowTable } from '../showTable/ShowTable';


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/readFile" component={ReadFile} />
      <Route exact path="/showTable" component={ShowTable} />
      
      
      </Switch>
  );
};

export default Routes;


