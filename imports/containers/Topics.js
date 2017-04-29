import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux' // 18kb

import Topics from '/imports/components/Topics'

export default withRouter(
  connect(
    (state) => ({
      auth: state.auth
    })
  )(Topics)
)
