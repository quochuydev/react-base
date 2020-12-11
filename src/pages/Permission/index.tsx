import React from 'react';
import { Link } from '@material-ui/core';
import { PATHS } from '../../common/constants';
const { ADMIN_ROUTE } = PATHS;
import '../NotFound/style.scss';

const Permission: React.FunctionComponent = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>403</h1>
        </div>
        <h2>You dont have permission to access this page!</h2>
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

export default Permission;
