import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import style from "../Header/Header.module.css";

const Header = () => {

    return (
        <div>
            <p className={style.logo}>Nopa <br />Market</p>
        </div>
    );
};

export default Header;