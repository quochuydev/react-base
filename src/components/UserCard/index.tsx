import { Avatar, CircularProgress, MenuItem, Menu } from '@material-ui/core';

export default function UserCard({
  loading,
  classes,
  handleClick,
  handleClose,
  anchorEl,
}: any) {
  let photo = 'https://petstoresaigon.com/wp-content/uploads/2019/03/P-8.jpg';
  return (
    <div className={classes.card}>
      <div className="m-r-md">
        <span>{'user.name'}</span>
        <p className="m-none">{'user.name'}</p>
      </div>
      <div
        className={classes.avatarWrapper}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar src={photo} />
        {loading && (
          <CircularProgress size={124} className={classes.progress} />
        )}
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ marginTop: 40 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
