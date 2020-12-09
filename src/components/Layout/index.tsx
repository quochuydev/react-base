import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  Drawer,
  CssBaseline,
  Grid,
  Paper,
  Avatar,
  Select,
  MenuItem,
} from '@material-ui/core';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';

import { Effect, Menus } from '../';
import UserCard from './UserCard';
import { logo } from '../../common/data';
import us from '../../assets/images/us.png';
import vn from '../../assets/images/vn.png';
import theme from './theme';
import './style.scss';

const useStyles = makeStyles(theme);

function Layout(props: TODO): TODO {
  const { alert, isLoading, setAlert, user } = props;
  const MENU_OPEN = 'open';
  const MENU_CLOSE = 'close';
  const FLAGS = [
    { key: 'en', value: 'en', avatar: us },
    { key: 'vi', value: 'vi', avatar: vn },
  ];

  const classes = useStyles();
  const { i18n } = useTranslation('header');
  const lng = localStorage.getItem('lng') || 'en';

  const openMenu = localStorage.getItem('openMenu') || MENU_OPEN;
  const isOpenMenu = openMenu == MENU_OPEN;

  const [open, setOpen] = React.useState(isOpenMenu);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('lng', language);
  };

  const handleDrawerOpen = () => {
    localStorage.setItem('openMenu', MENU_OPEN);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    localStorage.setItem('openMenu', MENU_CLOSE);
    setOpen(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="root">
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}></Typography>
            <UserCard user={user} handleClose={handleClose} anchorEl={anchorEl} handleClick={handleClick} />
            <Select
              value={lng}
              onChange={(e: TODO) => {
                changeLanguage(e.target.value);
              }}
              className="menu-flags"
            >
              {FLAGS.map((e: TODO) => (
                <MenuItem key={e.key} value={e.value}>
                  <Avatar src={e.avatar} variant="square" className={classes.small} />
                </MenuItem>
              ))}
            </Select>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <Avatar src={logo} variant="square" style={{ width: 180 }} />
            <IconButton onClick={handleDrawerClose} style={{ float: 'right' }}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Menus />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <div className={classes.container}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>{props.children}</Paper>
              </Grid>
            </Grid>
          </div>
        </main>
      </div>
      <Effect isLoading={isLoading} setAlert={setAlert} alert={alert} />
    </>
  );
}

const mapStateToProps = (state: TODO) => ({
  user: state.auth.user,
});

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
