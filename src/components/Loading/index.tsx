import React from 'react';
import { LinearProgress } from '@material-ui/core';
import './style.scss';

export default function Loading({ isLoading }: { isLoading: boolean }): TODO {
  return <>{isLoading ? <LinearProgress className="loading" color="secondary" /> : null}</>;
}
