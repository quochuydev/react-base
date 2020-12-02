import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import { MENU_DATA } from '../../utils/routes';
import './style.scss';

export default function Menus(props: any) {
  const pathname = window.location.pathname;
  const [selected, setSelected] = useState(pathname);

  const handleListItemClick = (key: string) => {
    setSelected(key);
  };

  return (
    <div>
      <List>
        {MENU_DATA.map((e, i) => {
          return e.is_open ? (
            <Link
              to={e.path}
              key={e.key}
              onClick={() => handleListItemClick(e.path)}
            >
              <ListItem selected={selected.includes(e.key)}>
                <ListItemIcon>{e.icon}</ListItemIcon>
                <ListItemText primary={e.title} />
              </ListItem>
            </Link>
          ) : null;
        })}
      </List>
    </div>
  );
}
