import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTeam } from '../store/action/team'
import Team from './Team'


class TeamList extends Component {
    
    render() {
      console.log(this.props)
    return (<div>        
              <form onSubmit={e => {
                              e.preventDefault()
                              this.props.addTeam('Teste')
              }}>
                <input type="submit" value="Adicionar"/>
              </form>


              {this.props.teams.map(team =>
                  <Team key={team.id} {...team}/>
              )}
            </div>)
        }
}

const mapStateToProps = state => {
  return { teams: state.teamsReducer.teams }
}
const mapDispatchToProps = dispatch => ({
   addTeam: name => dispatch(addTeam(name))
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(TeamList)
