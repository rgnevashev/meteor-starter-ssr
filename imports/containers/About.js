import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux' // 18kb

import About from '/imports/components/About'

export default withRouter(
  connect(
    (state) => ({
      auth: state.auth
    })
  )(About)
)
