import React from 'react'
import { connect } from 'react-redux'

const ScheduledService = (props) => {    
    const service = props.services.byId[props.serviceId] 
    return <div>
                {service.status}<br/>
                {service.dateProtocol}
            </div>
}


const mapStateToProps = state => {    
    return { services: state.scheduledServicesReducer }
  }

export default connect(mapStateToProps)(ScheduledService)