import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Carrousel from '../../Components/Carrousel/Carrousel';
import Dokumente2 from './Secondlevel/Dokumente2';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={6}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 524,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 250,
  },
}));

export default function Dokumente() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Dokumente" {...a11yProps(0)} />
        <Tab label="Online Information" {...a11yProps(1)} />
        <Tab label="Kauf von Waren und Dienstleistungen" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* <Ausweis /> */}
        <Dokumente2 />
      </TabPanel>
      <TabPanel value={value} index={1}>
      Demnächst
      </TabPanel>
      <TabPanel value={value} index={2}>
      Demnächst
      </TabPanel>
    </div>
  );
}
