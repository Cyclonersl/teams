import { connect } from 'react-redux'
import TeamList from '../components/TeamList'
import { addTeam } from '../store/action/team'

const mapStateToProps = state => ({
   ...state
})
const mapDispatchToProps = dispatch => ({
    addTeam: name => dispatch(addTeam(name))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamList)