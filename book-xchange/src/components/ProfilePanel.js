import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BookList from "./BookList";
import ReviewList from "./ReviewList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProfilePanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="basic tabs example"
        >
          <Tab label="For sale" {...a11yProps(0)} />
          <Tab label="For rent" {...a11yProps(1)} />
          <Tab label="For trade" {...a11yProps(2)} />
          <Tab label="Reviews" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel
        value={value}
        index={0}
        style={{ height: 520, overflowY: "scroll" }}
      >
        <BookList></BookList>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        style={{ height: 520, overflowY: "scroll" }}
      >
        <BookList></BookList>
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        style={{ height: 520, overflowY: "scroll" }}
      >
        <BookList></BookList>
      </TabPanel>
      <TabPanel
        value={value}
        index={3}
        style={{ height: 520, overflowY: "scroll" }}
      >
        <ReviewList></ReviewList>
      </TabPanel>
    </Box>
  );
}
