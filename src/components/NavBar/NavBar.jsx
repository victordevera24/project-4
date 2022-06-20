import React from "react";
import './NavBar.css';
import {Link} from 'react-router-dom';
import {logOut} from '../../utilities/users-service'


function NavBar({user, setUser}) {
    function handleLogOut() {
        logOut();
        setUser(null);
    }

    return (
        <nav className='navbar bg-dark container'>
            { user ? 
                <>
                    <h4><Link to='/home'>Home</Link></h4>
                    <h4><Link to='/create'>Add Question</Link></h4>
                    <h4><Link to='/languages'>Languages</Link></h4>
                    <h4><Link to='/soft-skills'>Soft Skills</Link></h4>
                    <h4><Link to='/companies'>Companys</Link></h4>
                    <h4><Link onClick={handleLogOut}>Sign Out</Link></h4>
                </>
                :
                <>
                    <h4><Link to='/log-in'>Log in</Link></h4>
                    <h4><Link to='/sign-up'>Sign up</Link></h4>
                </>
            }
        </nav>
    )
}

export default NavBar;