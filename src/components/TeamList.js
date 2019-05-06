import React from 'react'
import Team from './Team'


const TeamList = ({teams, addTeam}) => {
    
    console.log(teams)
    console.log(addTeam)
    return  <div>        
        <form onSubmit={e => {
        e.preventDefault()
        addTeam('Teste')
      }}>
        <input type="submit" value="Adicionar"/>
      </form>


        {teams.map(team =>
            <Team 
            key={team.id}      
            {...team}
            />
        )}
    </div>
}

export default TeamList
