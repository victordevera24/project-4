import React from "react";
import {Link} from 'react-router-dom';


function LanguageBar() {

    return (
        <nav className='navbar bg-dark container'>
            <>
                <h5><Link to='/javascript'>Javascript</Link></h5>
                <h5><Link to='/python'>Python</Link></h5>
                <h5><Link to='/mysql'>MySQL</Link></h5>
                <h5><Link to='/mongodb'>MongoDB</Link></h5>
            </>
        </nav>
    )
}

export default LanguageBar;