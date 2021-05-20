import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="header">

        <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>

        <img className="header__logo" src="data:image/png;base64,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" alt="logo" />

          <IconButton>
            <ForumIcon fontSize="large" className="header__icon"/>
        </IconButton>  

        </div>
    )
}

export default Header
