import React from "react";
import { useSelector } from "react-redux";

const ScheduledService = props => {
  const scheduledServices = useSelector(state => state.scheduledServices);
  const service = scheduledServices.byId[props.serviceId];
  return (
    <div>
      {service.status}
      <br />
      {service.dateProtocol}
    </div>
  );
};

export default ScheduledService;
