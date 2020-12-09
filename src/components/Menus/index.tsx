import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText, List, Collapse } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { MENU_DATA } from '../../utils/routes';
import './style.scss';

export default function Menus(): TODO {
  const { t } = useTranslation('menu');
  const pathname = window.location.pathname;

  const [mainSelected, setMainSelected] = useState<TODO>({ setting: true });
  const [selected, setSelected] = useState(pathname);

  const handleListItemClick = (key: string) => {
    setSelected(key);
  };

  const handleCol = (key: string) => {
    setMainSelected({ ...mainSelected, [key]: !mainSelected[key] });
  };

  function NavItem(props: TODO) {
    const { selected, item, handleCol } = props;
    return (
      <ListItem selected={selected} onClick={() => handleCol(item.key)} className="menu-item">
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={t(item.title)} />
      </ListItem>
    );
  }

  function NavLinkItem(props: TODO) {
    const { selected, item, isSub } = props;
    return (
      <Link to={item.path} key={item.key} onClick={() => handleListItemClick(item.key)}>
        <ListItem selected={selected} className="menu-item" style={isSub ? { paddingLeft: 30 } : {}}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={t(item.title)} />
        </ListItem>
      </Link>
    );
  }

  return (
    <List>
      {MENU_DATA.map((e) => {
        {
          if (e && e.is_open) {
            if (e.subs) {
              return (
                <div key={e.key}>
                  <NavItem selected={selected.includes(e.key)} item={e} handleCol={(key: string) => handleCol(key)} />
                  <Collapse in={mainSelected[e.key]}>
                    {e.subs &&
                      e.subs.map(
                        (sub: TODO) =>
                          sub.is_open && (
                            <NavLinkItem key={sub.key} item={sub} selected={selected.includes(sub.key)} isSub={true} />
                          )
                      )}
                  </Collapse>
                </div>
              );
            } else {
              return <NavLinkItem key={e.key} item={e} selected={selected.includes(e.key)} isSub={false} />;
            }
          }
        }
      })}
    </List>
  );
}
