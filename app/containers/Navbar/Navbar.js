import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    cursor: 'pointer'
  }
}));

// TODO: Fix the wiggly screen on page change caused by CircularProgress from material

const Navbar = ({
  signup, username, loadUser, logout, loading, login
}) => {
  useEffect(() => {
    loadUser();
  }, []);

  const handleSignUp = () => {
    login();
    window.open('/api/auth/facebook', '_self');
  };

  // TODO: Make a seperate component that handles the styles

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="inherit"
            variant="h6"
            className={classes.title}
            align="center"
            component={Link}
            to="/"
          >
            ComputerBase
          </Typography>

          {loading ? (
            <CircularProgress color="inherit" />
          ) : username ? (
            <Button onClick={logout} color="inherit">
              Logout
            </Button>
          ) : (
            <Button onClick={handleSignUp} color="inherit">
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
