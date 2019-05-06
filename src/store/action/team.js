let nextTeamId = 2;
export const addTeam = name => ({
    type: 'ADD_TEAM',
    team: {id: nextTeamId++, name}
})