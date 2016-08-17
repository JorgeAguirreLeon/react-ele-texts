import React                                      from 'react'
import Layout                                     from './Layout'
import {Router, Route, Link, useRouterHistory}    from 'react-router'
import {createHashHistory}                        from 'history'

const Routes = (props)=> {

  const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

  return (
    <Router history={appHistory}>
      <Route name='app' path='/' component={Layout}>
      </Route>
    </Router>
  );
}

export default Routes;
