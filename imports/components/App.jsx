import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet' // 24kb

import routes from '/imports/routes'

const App = () => (
  <div>
    <Helmet>
      <title>QuizLabs</title>
    </Helmet>
    <div className="container">
      <Switch>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Switch>
    </div>
  </div>
)

export default App
