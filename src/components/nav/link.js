import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Link = ({name, path, icon}) => {
    const currentPath = window.location.pathname;

    return (
        <RouterLink onClick={styleSelectItem} className={"nav-item"} to={path}>
            <div className="nav-icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            {name}
        </RouterLink>
    )
};

export default Link;