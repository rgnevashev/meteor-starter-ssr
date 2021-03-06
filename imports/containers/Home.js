import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux' // 18kb

import * as actions from '/imports/actions'

import Home from '/imports/components/Home'

export default withRouter(
  connect(
    (state) => ({
      ...state
    })
  )(Home)
)
