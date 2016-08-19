import React                                      from 'react'
import Layout                                     from './Layout'
import {Router, useRouterHistory}                 from 'react-router'
import {Route, IndexRoute}                        from 'react-router'
import {createHashHistory}                        from 'history'

import Exercise                                   from './views/Exercise'
import Selector                                   from './views/Selector'

const Routes = (props)=> {

  const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

  return (
    <Router history={appHistory}>
      <Route name='app' path='/' component={Layout}>
        <IndexRoute component={Exercise} />
        <Route path='select' component={Selector} />
      </Route>
    </Router>
  );
}

export default Routes;
