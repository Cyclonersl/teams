import React from 'react'
import ScheduledService from './ScheduledService'

const Team = (props) => (
    <div onClick={() => props.onclick(props.team)}>
        {props.team.name}
        {props.team.services.map(ser => {
            return <ScheduledService key={ser}
                        serviceId={ser} />
        })}
    </div>
)


export default Team