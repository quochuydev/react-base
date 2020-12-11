import React from 'react';

export default function Line({ style, ...props }: TODO): TODO {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
        ...style,
      }}
    >
      {props.children}
    </div>
  );
}
