import React from "react";
import { connect } from "react-redux";
import ScheduledService from "../ScheduleService";
import * as teamsAction from "../../store/action/teamsAction";

import { SortableContainer, SortableElement } from "react-sortable-hoc";

const ScheduledServiceList = props => {
  const SortableItem = SortableElement(({ value }) => (
    <li>
      <ScheduledService serviceId={value} />
    </li>
  ));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <ul>
        {items.map((value, index) => {
          if (props.servicesInfo.byId[value].status === "PROGRAMADA") {
            return (
              <SortableItem
                key={`service[${index}]`}
                index={index}
                value={value}
              />
            );
          } else {
            return (
              <li key={`team[${value.teamId}]service[${index}]`} index={index}>
                <ScheduledService serviceId={value} />
              </li>
            );
          }
        })}
      </ul>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    props.reorderService(props.team, oldIndex, newIndex);
  };
  return (
    <SortableList
      items={props.services}
      onSortEnd={onSortEnd}
      teamId={props.team.id}
    />
  );
};

const mapStateToProps = state => {
  return { servicesInfo: state.scheduledServicesReducer };
};

const mapDispatchToProps = dispatch => ({
  reorderService: (team, oldIndex, newIndex) =>
    dispatch(teamsAction.reorderService(team, oldIndex, newIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduledServiceList);
