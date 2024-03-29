import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import TestPage from '../test'
import SuperList from '../superlist'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/superlist" component={SuperList} />
      <Route exact path="/test" component={TestPage} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
