import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as teamsAction from '../store/action/teamsAction'
import * as schedServicesAction from '../store/action/scheduledServicesAction'
import Team from '../components/Team'
import './TeamList.css'


class TeamList extends Component {

  render() {
    return (<div>
      <form onSubmit={e => {
        e.preventDefault()
        const team = { id: Math.random(), name: 'Teste' }
        this.props.addTeam(team)
        const service = { id: Math.random(), dateProtocol: '13/04/2019 13:44', teamId: team.id, status: 'PROGRAMADA' }
        this.props.addSchedService(service)
        this.props.addTeamService(team, service)
      }}>
        <input type="submit" value="Adicionar" />
      </form>

      <div className="teamListContainer">
        <div className="panelHeader">Equipes</div>
        <div className="panelBody">
          {this.props.teams.allIds.map(teamId =>
            <Team key={teamId}
              onclick={this.props.remTeam}
              team={this.props.teams.byId[teamId]} />

          )}
        </div>
      </div>
    </div>)
  }
}

const mapStateToProps = state => {
  return { teams: state.teamsReducer }
}
const mapDispatchToProps = dispatch => ({
  addTeam: team => dispatch(teamsAction.addTeam(team)),
  remTeam: team => dispatch(teamsAction.remTeam(team)),
  addTeamService: (team, service) => dispatch(teamsAction.addService(team, service)),
  addSchedService: service => dispatch(schedServicesAction.addSchedService(service)),
  remSchedService: service => dispatch(schedServicesAction.remSchedService(service)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamList)
