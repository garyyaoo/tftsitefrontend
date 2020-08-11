import React from 'react';

import Sidebar from './components/Sidebar.js';
import Topbar from './components/Topbar.js';
import Method from './components/Method.js';
import Stats from './components/Stats.js';
import Landing from './components/Landing.js';

import bg_jhin from './imgs/bg_jhin.jpg';

import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Home from '@material-ui/icons/Home';

import { Route, Switch, Redirect } from 'react-router-dom';

const routes = [
  { path: "/home", name: "Home", component: Landing, icon: Home},
  { path: "/stats", name: "Statistics", component: Stats, icon: TrendingUp},
  { path: "/method", name: "Methodology", component: Method, icon: AccountCircle},
]

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  mainPanel: {
    width: `calc(100% - ${drawerWidth}px)`, 
    float: "right",
    maxHeight: "100%",
    height: '100%',
    zIndex: '2',
    "& *": {
      color: '#e6e6e6',
      fontFamily: "Roboto, sans-serif"
    }
  },
  page: {
    top: "0",
    height: "100vh",
  },
  background: {
    position: "absolute",
    height: "110vh",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    "&:after": {
      position: "absolute",
      width: "100%",
      height: "110vh",
      content: '""',
      display: "block",
      background: 'black',
      opacity: ".6",
      zIndex: '-5'
    },
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: "url("+ bg_jhin + ")",
    backgroundRepeat: "repeat-y",
    zIndex: '-10'
  },
}))

const switchRoutes = (
  <Switch>
    {routes.map((route, key) => {
      return (
        <Route
         path={route.path}
         component={route.component}
         key={key}
        />
      )
    })}
    <Redirect from="/" to="/home"/>
  </Switch>
)

export default function Page() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.background}/>
      <Sidebar routes={routes}/>
      <div className={classes.mainPanel}>
        {switchRoutes}
      </div>
    </div>
  );
}
