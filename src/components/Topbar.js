import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    topbar: {
        backgroundColor: "rgb(123,22,1)",
        // overflow: "auto",
        // position: "relative",
        width: "100%",
        zIndex: "1000",
        color: "rgb(128,128,128)",
        height: '60px',
        padding: "0px 0px 0px 10px",
        // minHeight: "50px",
        // display: "block"
    }
}))

export default function Topbar(props) {
    const classes = useStyles();

    function pageName() {
        var name;
        props.routes.map(route => {
            if (window.location.href.indexOf(route.path) !== -1) {
                name = route.name;
            }
            return null;
        });
        return name;
    }
    return (
        <AppBar className={classes.topbar}>
            <h3>{pageName()}</h3>
            <Toolbar>
            </Toolbar>
        </AppBar>
    )
}