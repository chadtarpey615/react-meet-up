import React, { useContext } from 'react';
import { Link, Redirect } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { UserContext } from "../utils/UserStore";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);


function Navbar() {
    const { userState, setUserState } = useContext(UserContext);
    function handleLogOut() {
        setUserState({});
        window.location.replace("/login")
    };
    const classes = useStyles();
    if (userState) {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Meet-Up
            </Typography>

                        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                            <Button onClick={handleLogOut} color="inherit">{userState.email} log out</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        )
    } else {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Meet-Up
            </Typography>

                        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                            <Button color="inherit">LogIn </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar;