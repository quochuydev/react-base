import React from 'react';
import { Alert, Loading } from '../';
import './style.scss';

export default function Effect(props: TODO): TODO {
  const { alert, isLoading, setAlert } = props;

  const handleCloseAlert = (event?: TODO, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert({ ...alert, open: false });
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      {alert && (
        <Alert
          open={alert.open}
          message={alert.message}
          type={alert.type}
          timeout={alert.timeout}
          handleClose={handleCloseAlert}
          setAlert={setAlert}
        />
      )}
    </>
  );
}
