import { connect } from 'react-redux'
import React from 'react';
import './App.css';
import '../containers/ControlTeamList'
import ControlTeamList from '../containers/ControlTeamList';

const App = ({dispatch}) => {
  return (
    <div className="App">
      <ControlTeamList/>
    </div>
  )
}

export default connect()(App);
