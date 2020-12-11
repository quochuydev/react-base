import React from 'react';
import { Link } from '@material-ui/core';
import { PATHS } from '../../common/constants';
const { ADMIN_ROUTE } = PATHS;
import './style.scss';

const NotFound: React.FunctionComponent = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops, The Page you are looking for cant be found!</h2>
        <div style={{ marginTop: 20 }}>
          <Link href={ADMIN_ROUTE}>
            <span className="arrow" />
            Return To Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
