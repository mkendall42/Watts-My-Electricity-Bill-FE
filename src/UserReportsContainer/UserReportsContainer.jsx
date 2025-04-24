import './UserReportsContainer.css'
import { NavLink } from 'react-router-dom'

const UserReportsContainer = () => {
    return (
        <nav>
        <NavLink to="/:user_id" className="nav">Search</NavLink>
        <NavLink to="/:user_id/:userReportsId" className="nav">Saved Reports</NavLink>

        <NavLink to="/" className="nav">Log out</NavLink>
        </nav>
    )
}
export default UserReportsContainer
