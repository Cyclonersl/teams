import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTeam, addService } from "../../store/ducks/teams";
import { addSchedService } from "../../store/ducks/scheduledServices";
import Team from "../Team";
import Grid from "@material-ui/core/Grid";
import "./index.css";

const TeamList = () => {
  const teams = useSelector(state => state.teams);
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          const team = { id: Math.random(), name: "Teste" };
          dispatch(addTeam(team));
          const service1 = {
            id: Math.random(),
            dateProtocol: "11/04/2019 13:44",
            teamId: team.id,
            status: "EXECUTADA"
          };
          const service2 = {
            id: Math.random(),
            dateProtocol: "12/04/2019 13:44",
            teamId: team.id,
            status: "RECUSADA"
          };
          const service3 = {
            id: Math.random(),
            dateProtocol: "13/04/2019 13:44",
            teamId: team.id,
            status: "PROGRAMADA"
          };
          const service4 = {
            id: Math.random(),
            dateProtocol: "14/04/2019 13:44",
            teamId: team.id,
            status: "PROGRAMADA"
          };
          dispatch(addSchedService(service1));
          dispatch(addSchedService(service2));
          dispatch(addSchedService(service3));
          dispatch(addSchedService(service4));

          dispatch(addService(team, service1));
          dispatch(addService(team, service2));
          dispatch(addService(team, service3));
          dispatch(addService(team, service4));
        }}
      >
        <input type="submit" value="Adicionar" />
      </form>

      <div className="teamListContainer">
        <div className="panelHeader">Equipes</div>
        <div className="gridRoot">
          <Grid container spacing={8}>
            {teams.allIds.map(teamId => (
              <Grid item xs={4} key={`gridItem[${teamId}]`}>
                <Team key={teamId} team={teams.byId[teamId]} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
