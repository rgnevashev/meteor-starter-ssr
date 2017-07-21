import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Helmet from 'react-helmet' // 24kb

import routes from '/imports/routes'

import NoMatch from './NoMatch'

class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.location.pathname)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Meteor Starter Kit</title>
        </Helmet>
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <hr />
          <Switch>
            {routes.map(route => <Route {...route} key={route.path} />)}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
