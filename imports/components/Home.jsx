import React from 'react'
import alertify from '/imports/lib/alertify'

const Home = (props) => (
  <h1>
    Home <i className="fa fa-user" />
    <button className="btn" onClick={() => alertify.prompt('ok')}>Ok</button>
  </h1>
)

export default Home
