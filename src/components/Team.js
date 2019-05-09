import React from 'react'
import ScheduledServiceList from './ScheduledServiceList'
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import "./Team.css"



const Team = (props) => {
    return <Card className="card">
        <CardContent>
            <Grid container spacing={0}>
                <Grid item xs={1} style={{ verticalAlign: 'middle' }}>
                    <Avatar style={{ backgroundColor: '#F4F4F4', width: '20px', height: '20px' }}></Avatar>
                </Grid>
                <Grid item xs={11}>
                    <Typography variant="h5" component="h2" gutterBottom>{props.team.name}</Typography>
                </Grid>
                <ScheduledServiceList
                    team={props.team}
                    services={props.team.services}
                />
            </Grid>
        </CardContent>
    </Card>
    //onClick={() => props.onclick(props.team)}

}


export default Team