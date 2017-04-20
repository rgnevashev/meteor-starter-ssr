import { connect } from 'react-redux' // 18kb

import * as actions from '/imports/actions'

import Home from '/imports/components/Home'

export default connect(
  (state) => ({
    ...state
  })
)(Home)
