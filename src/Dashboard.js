import './Dashboard.css';
import Menu from './Menu';
import SearchBar from './SearchBar';
import Table from './Table';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <Menu />
            <SearchBar />
            <Table />
            <Link
                className='player-link'
                to="player">Design2(Player)
            </Link>
        </div>
    )
}

export default Dashboard;