import React from "react";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { yellow } from '@mui/material/colors';


function Header() {
    return (
    <header>
        <h1> <TipsAndUpdatesIcon sx = {{color : yellow['A200']}} /> Guardian</h1>
    </header>
    );
};



export default Header;