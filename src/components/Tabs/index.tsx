import React, { useState } from 'react';
import { Tab, Tabs as MuiTabs } from '@material-ui/core';

function a11yProps(index: number) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  tab: string;
  render?: React.ReactNode;
  is_show: boolean;
}

export default function Tabs(props: TODO): TODO {
  const { rows, selected } = props;
  const [value, setValue] = useState(selected || rows[0]['value']);
  const handleChange = (event: TODO, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <MuiTabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        style={{ marginBottom: 15 }}
      >
        {rows.map(
          (e: TabPanelProps, i: number) =>
            e.is_show && (
              <Tab
                key={i}
                label={e.tab}
                onClick={() => {
                  setValue(i);
                }}
                {...a11yProps(i)}
              />
            )
        )}
      </MuiTabs>
      {rows.map((e: TabPanelProps, i: number) => (
        <TabPanel value={value} key={i} index={i}>
          {e.render}
        </TabPanel>
      ))}
    </div>
  );
}

function TabPanel(props: TODO) {
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
