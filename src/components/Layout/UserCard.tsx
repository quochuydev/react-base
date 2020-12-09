import React from 'react';
import { Avatar, CircularProgress, MenuItem, Menu, Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { photo } from '../../common/data';
import './style.scss';

export default function UserCard({ user, loading, handleClick, handleClose, anchorEl }: TODO): TODO {
  function logout() {
    localStorage.clear();
    window.location.href = '/login';
    return;
  }

  return (
    <div className="card">
      <Button onClick={handleClick}>
        <div className="m-r-md user-format">
          {/* <span>{'user.name'}</span> */}
          <p className="m-none">{user.email}</p>
        </div>
        <div className="avatar-wrapper" aria-controls="simple-menu" aria-haspopup="true">
          <Avatar src={photo} />
          {loading && <CircularProgress size={124} className="progress" />}
        </div>
      </Button>
      <Menu
        getContentAnchorEl={null}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={logout} className="menu-item">
          <ExitToAppIcon className="m-r-sm" /> Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
