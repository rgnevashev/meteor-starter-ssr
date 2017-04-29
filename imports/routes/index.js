import React from 'react'

import Home from '/imports/containers/Home'
import About from '/imports/containers/About'
import Topics from '/imports/containers/Topics'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    fetchData: (match) => {
      return Promise.resolve({ home: match })
    }
  },
  {
    path: '/about',
    component: About,
    fetchData: (match) => {
      return Promise.resolve({ about: match })
    }
  },
  {
    path: '/topics',
    component: Topics,
    fetchData: (match) => {
      return Promise.resolve({ topics: match })
    }
  }
  // etc.
]

export default routes
