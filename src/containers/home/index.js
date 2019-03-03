import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import { Route, Link } from 'react-router-dom'


const Home = props => (
  <div>
    <h1>Super App</h1>
    <p>created by Yehuda</p>

    <p>
      <button onClick={props.increment} disabled={true}>Products</button>
      <button onClick={props.incrementAsync} disabled={true}>Categories</button>
      <Link to="/superlist" className="btn btn-primary">Create Shopping List</Link>
      <button onClick={props.incrementAsync} disabled={true}>Open Shopping List</button>
    </p>

    
   
  </div>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
