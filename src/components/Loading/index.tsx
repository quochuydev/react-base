import React from 'react';
import { LinearProgress } from '@material-ui/core';
import './style.scss';

export default function Loading(props: any) {
  return (
    <div>
      {props.isLoading ? (
        <LinearProgress className="loading" color="secondary" />
      ) : null}
    </div>
  );
}
