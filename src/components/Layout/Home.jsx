import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './../../App.css'

const Home = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Home;