import React, { useState } from 'react';
import { Tab, Tabs as MuiTabs } from '@material-ui/core';

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  tab: string;
  render?: React.ReactNode;
}

export default function Tabs(props: TODO) {
  const { rows } = props;
  const [value, setValue] = useState(rows[0]['value']);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <MuiTabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        {rows.map((e: TabPanelProps, i: number) => (
          <Tab
            key={i}
            label={e.tab}
            onClick={() => {
              setValue(i);
            }}
            {...a11yProps(i)}
          />
        ))}
      </MuiTabs>
      {rows.map((e: TabPanelProps, i: number) => (
        <TabPanel value={value} key={i} index={i}>
          {e.render}
        </TabPanel>
      ))}
    </div>
  );
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}
