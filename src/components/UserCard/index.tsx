import { Avatar, CircularProgress, MenuItem, Menu } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './style.scss';

export default function UserCard({
  loading,
  handleClick,
  handleClose,
  anchorEl,
}: any) {
  let photo = 'https://petstoresaigon.com/wp-content/uploads/2019/03/P-8.jpg';

  function logout() {
    localStorage.clear();
    window.location.href = '/login';
    return;
  }

  return (
    <div className="card">
      <div className="m-r-md">
        {/* <span>{'user.name'}</span> */}
        <p className="m-none">{'user.name'}</p>
      </div>
      <div
        className="avatar-wrapper"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar src={photo} />
        {loading && <CircularProgress size={124} className="progress" />}
      </div>
      <Menu
        getContentAnchorEl={null}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose} className="menu-item">
          <PersonIcon className="m-r-sm" /> Profile
        </MenuItem>
        <MenuItem onClick={logout} className="menu-item">
          <ExitToAppIcon className="m-r-sm" /> Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
