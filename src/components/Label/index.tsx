import React from 'react';
import { InputLabel } from '@material-ui/core';

export default function Label({ text }: { text: string }): TODO {
  return (
    <InputLabel shrink className="text-black" style={{ fontSize: 18 }}>
      {text}
    </InputLabel>
  );
}
