import { connect } from 'react-redux' // 18kb

import * as actions from '/imports/actions'

import App from '/imports/components/App'

export default connect(
  (state) => ({
    auth: state.auth
  })
)(App)
