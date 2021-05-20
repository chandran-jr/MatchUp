import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
    return (
        <div className="header">
        
            <PersonIcon fontSize="large" className="header__personIcon" />
            
        </div>
    )
}

export default Header
