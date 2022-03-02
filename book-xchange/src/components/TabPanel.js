import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';


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
        <Box sx={{ p: 3 }}>
          <Typography component={'div'}>{children}</Typography>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', m: 4 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Information" {...a11yProps(0)} />
        <Tab label="Billing and Delivery info" {...a11yProps(1)} />
        <Tab label="Orders" {...a11yProps(2)} />
        <Tab label="Book Credits" {...a11yProps(3)} />

      </Tabs>

      {/* InformationTab */}
      <TabPanel style={{ width: "100%" }} value={value} index={0}>
        <Box sx={{ borderBottom: 1, width: "100%", fontWeight: "bold" }}>
          PERSONAL DATA:
        </Box>
        <Typography>
          Name:
        </Typography>
        <Typography>
          Email:
        </Typography>
        <Typography>
          Phone:
        </Typography>
        <Typography>
          Password:
        </Typography>
        <Button sx={{ mt: 2 }} variant="contained">Edit</Button>
      </TabPanel>
      {/* Billing Tab */}
      <TabPanel style={{ width: "100%" }} value={value} index={1}>
        <Box sx={{ mb: 3 }}>
          <Box sx={{ borderBottom: 1, width: "100%", fontWeight: "bold" }}>
            BILLING INFO:
          </Box>
          <Typography>
            First Name:
          </Typography>
          <Typography>
            Last Name:
          </Typography>
          <Typography>
            Address:
          </Typography>
          <Typography>
            Phone:
          </Typography>
          <Typography>
            City:
          </Typography>
          <Typography>
            Zip Code:
          </Typography>
        </Box>
        {/* Shipping */}
        <Box>
          <Box sx={{ borderBottom: 1, width: "100%", fontWeight: "bold" }}>
            SHIPPING INFO:
          </Box>
          <Typography>
            First Name:
          </Typography>
          <Typography>
            Last Name:
          </Typography>
          <Typography>
            Address:
          </Typography>
          <Typography>
            Phone:
          </Typography>
          <Typography>
            City:
          </Typography>
          <Typography>
            Zip Code:
          </Typography>
        </Box>
        <Button sx={{ mt: 2 }} variant="contained">Edit</Button>
      </TabPanel>

      {/* Orders */}
      <TabPanel value={value} index={2} style={{ width: "100%" }}>
        <Box sx={{ width: "100%", fontWeight: "bold" }}>
          ORDERS:
        </Box>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Order 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Name:
            </Typography>
            <Typography>
              Email:
            </Typography>
            <Typography>
              Phone:
            </Typography>
            <Typography>
              Billing Address:
            </Typography>
            <Typography>
              Shipping Address:
            </Typography>
            <Typography>
              Ordered on:
            </Typography>
            <Typography>
              Order:
            </Typography>
            <Typography>
              Total Price:
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Order 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Name:
            </Typography>
            <Typography>
              Email:
            </Typography>
            <Typography>
              Phone:
            </Typography>
            <Typography>
              Billing Address:
            </Typography>
            <Typography>
              Shipping Address:
            </Typography>
            <Typography>
              Ordered on:
            </Typography>
            <Typography>
              Order:
            </Typography>
            <Typography>
              Total Price:
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Order 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Name:
            </Typography>
            <Typography>
              Email:
            </Typography>
            <Typography>
              Phone:
            </Typography>
            <Typography>
              Billing Address:
            </Typography>
            <Typography>
              Shipping Address:
            </Typography>
            <Typography>
              Ordered on:
            </Typography>
            <Typography>
              Order:
            </Typography>
            <Typography>
              Total Price:
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Order 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Name:
            </Typography>
            <Typography>
              Email:
            </Typography>
            <Typography>
              Phone:
            </Typography>
            <Typography>
              Billing Address:
            </Typography>
            <Typography>
              Shipping Address:
            </Typography>
            <Typography>
              Ordered on:
            </Typography>
            <Typography>
              Order:
            </Typography>
            <Typography>
              Total Price:
            </Typography>
          </AccordionDetails>
        </Accordion>

      </TabPanel>

      {/* Book Credits */}
      <TabPanel value={value} index={3} style={{ width: "100%" }}>
        <Box sx={{ width: "100%", fontWeight: "bold" }}>
          BOOK CREDITS:
        </Box>

        <Box>
          30 points
        </Box>
        <Box sx={{ width: 300 }}>

          <Slider style={{ color: "#1976d2" }} defaultValue={30} step={10} marks min={10} max={110} valueLabelDisplay="auto"  />
        </Box>

        <Typography>
          You may use your points to purchase other books
        </Typography>

      </TabPanel>



    </Box>
  );
}
