import React from 'react'
//import { Button } from 'react-bootstrap' // 259kb
//import BootstrapTable from 'react-bootstrap-table/lib/BootstrapTable' // 500kb | 467kb from lib
//import moment from 'moment' // 52kb

import alertify from '/imports/lib/alertify'

const Home = (props) => (
  <h1>
    Home <i className="fa fa-user" />
    <button className="btn" onClick={() => alertify.prompt('ok')}>Ok</button>
  </h1>
)

export default Home
