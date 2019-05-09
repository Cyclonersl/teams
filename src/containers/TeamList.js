import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as teamsAction from '../store/action/teamsAction'
import * as schedServicesAction from '../store/action/scheduledServicesAction'
import Team from '../components/Team'
import Grid from '@material-ui/core/Grid';
import './TeamList.css'


class TeamList extends Component {

  render() {
    return (<div>
      <form onSubmit={e => {
        e.preventDefault()
        const team = { id: Math.random(), name: 'Teste' }
        this.props.addTeam(team)
        const service1 = { id: Math.random(), dateProtocol: '11/04/2019 13:44', teamId: team.id, status: 'EXECUTADA' }
        const service2 = { id: Math.random(), dateProtocol: '12/04/2019 13:44', teamId: team.id, status: 'RECUSADA' }
        const service3 = { id: Math.random(), dateProtocol: '13/04/2019 13:44', teamId: team.id, status: 'PROGRAMADA' }
        const service4 = { id: Math.random(), dateProtocol: '14/04/2019 13:44', teamId: team.id, status: 'PROGRAMADA' }
        this.props.addSchedService(service1)
        this.props.addSchedService(service2)
        this.props.addSchedService(service3)
        this.props.addSchedService(service4)

        this.props.addTeamService(team, service1)
        this.props.addTeamService(team, service2)
        this.props.addTeamService(team, service3)
        this.props.addTeamService(team, service4)
      }}>
        <input type="submit" value="Adicionar" />
      </form>

      <div className="teamListContainer">
        <div className="panelHeader">Equipes</div>
        <div className="gridRoot">
          <Grid container spacing={8}>
            {this.props.teams.allIds.map(teamId =>
              <Grid item xs={4} key={`gridItem[${teamId}]`}>
                <Team key={teamId}
                  onclick={this.props.remTeam}
                  team={this.props.teams.byId[teamId]} />
              </Grid>
            )}
          </Grid>
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
