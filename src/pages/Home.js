import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../component/Profile';


const Home = () => {
    return (
        <>
            <div>
                <h1>HOME</h1>

                <NavLink to='/login'>signin</NavLink>
                <br />
                <NavLink to='/register'>signup</NavLink>

            </div>
            <div>
                {/* <Profile /> */}
            </div>
        </>
    );
};

export default Home;