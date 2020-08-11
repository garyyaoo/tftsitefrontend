import React from 'react'
import { NavLink } from 'react-router-dom';
import classNames from "classnames";
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import bg_teemo from '../imgs/bg_teemo.jpg';

// const infoBlue = "#00acc1";

const styles = theme => ({
    drawerPaper: {
        border: "none",
        top: "0",
        bottom: "0",
        left: "0",
        width: 260,
    },
    list: {
        marginTop: "20px",
        marginBottom: "0",
        listStyle: "none",
        position: "unset"
    },
    item: {
        position: "relative",
        display: "block",
        textDecoration: "none",
        "&:hover,&:focus,&:visited,&": {
            color: '#000'
        },
    },
    itemLink: {
        width: "auto",
        transition: "all 300ms linear",
        margin: "10px 15px 0",
        borderRadius: "3px",
        position: "relative",
        display: "block",
        padding: "10px 15px",
        backgroundColor: "transparent",
    },
    itemText: {
        margin: "0",
        lineHeight: "30px",
        fontSize: "14px",
        color: 'white'
      },
    itemIcon: {
        width: "24px",
        height: "30px",
        float: "left",
        marginRight: "15px",
        color: "rgba(256, 256, 256, 0.8)"
      },
    blue: {
        backgroundColor: "#00acc1",
    },
    background: {
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "block",
        top: "0",
        left: "0",
        "&:after": {
          position: "absolute",
        //   zIndex: "3",
          width: "100%",
          height: "100%",
          content: '""',
          display: "block",
          background: 'black',
          opacity: ".5"
        },
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: "url("+ bg_teemo + ")",
        backgroundRepeat: "repeat-y",
        zIndex: -99
      },
      sidebarWrapper: {
        position: "sticky",
        top: 0,
        height: '100vh',
        width: "260px",
        // zIndex: "1",
      },
      logo: {
          position: 'relative',
          textAlign: 'center',
        //   zIndex: 4,
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: "0",
            height: "1px",
            right: "15px",
            width: "calc(100% - 30px)",
            backgroundColor: "rgba(256,256,256 , 0.3)"
          }
      },
      logoText: {
        // ...defaultFont,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '2em',
        fontSize: "25px",
        fontWeight: "400",
        textDecoration: "none",
        backgroundColor: "transparent",
        "&,&:hover": {
          color: 'white'
        }
      },
})

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
    const classes = useStyles();

    const { routes } = props;

    function activeRoute(routeName) {
        return window.location.href.indexOf(routeName) > -1 ? true : false;
    }

    var homeLink = (
        <div className={classes.logo}>
            <a href="" className={classes.logoText}>TFT Meta</a>
        </div>
    )

    var list = (
        <List className={classes.list}>
            {routes.map((route, idx) => {
                return (
                    <NavLink
                        to={route.path}
                        key={idx}
                        className={classes.item}
                        activeClassName="active"
                    >
                        <ListItem
                            className={classNames(classes.itemLink, {[classes.blue]: activeRoute(route.path)})}
                        >
                            <route.icon className={classes.itemIcon}/>
                            <ListItemText
                              primary={route.name}
                              className={classNames(classes.itemText)}
                            />
                        </ListItem>
                    </NavLink>
                )
            })}
        </List>
    )

    const image = "bg_teemo.jpg";
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            open
            classes={{
                paper: classNames(classes.drawerPaper)
            }}
            >
            <div className={classes.sidebarWrapper}>{homeLink}{list}
                { image !== undefined ? (
                    <div
                        className={classes.background}
                    />
                ) : null }
            </div>
        </Drawer>
    );
}