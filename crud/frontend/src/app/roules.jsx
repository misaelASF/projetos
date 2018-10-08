import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../component/home/home'
import UserCrud from '../component/user/userCrud'

export default props =>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user' component={UserCrud} />
          <Redirect from='*' to='/' />
      </Switch>