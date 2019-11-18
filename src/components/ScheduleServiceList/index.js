import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ScheduledService from "../ScheduleService";
import { reorderService } from "../../store/ducks/teams";

import { SortableContainer, SortableElement } from "react-sortable-hoc";

const ScheduledServiceList = props => {
  const servicesInfo = useSelector(state => state.scheduledServices);
  const dispatch = useDispatch();

  const SortableItem = SortableElement(({ value }) => (
    <li>
      <ScheduledService serviceId={value} />
    </li>
  ));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <ul>
        {items.map((value, index) => {
          if (servicesInfo.byId[value].status === "PROGRAMADA") {
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
    dispatch(reorderService(props.team, oldIndex, newIndex));
  };

  return (
    <SortableList
      items={props.services}
      onSortEnd={onSortEnd}
      teamId={props.team.id}
    />
  );
};

export default ScheduledServiceList;
