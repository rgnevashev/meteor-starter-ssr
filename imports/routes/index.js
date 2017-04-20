
import Home from '/imports/containers/Home'

const routes = [
  {
    path: '/',
    component: Home,
    loadData: (match) => Promise.resolve(match),
  },
  {
    path: '/about',
    render: (props) => <h1>about</h1>
  }
  // etc.
]

export default routes
