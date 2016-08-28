import React                                      from 'react'
import {Router, useRouterHistory}                 from 'react-router'
import {Route, IndexRoute}                        from 'react-router'
import {createHashHistory}                        from 'history'

import Layout                                     from '../components/Layout'
import Exercise                                   from '../components/views/Exercise'
import Selector                                   from '../components/views/Selector'
import Uploader                                   from '../components/views/Uploader'

const Routes = (props)=> {

  const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

  return (
    <Router history={appHistory}>
      <Route name='app' path='/' component={Layout}>
        <IndexRoute component={Exercise} />
        <Route path='select' component={Selector} />
        <Route path='upload' component={Uploader} />
      </Route>
    </Router>
  );
}

export default Routes;
