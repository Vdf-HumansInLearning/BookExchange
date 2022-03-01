import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

function DashboardForm() {
    return (
        <div>
            <Box sx={{ display: "flex", flexDirection: "column", m: 4, border: 1, borderRadius: 5, p: 3,  }}>
                <FormControl sx={{mb:3}}>
                    <FormLabel sx={{fontWeight:"bold", fontSize: 18}} id="demo-radio-buttons-group-label">Categories</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="buy" control={<Radio />} label="Buy" />
                        <FormControlLabel value="Borrow" control={<Radio />} label="Borrow" />
                        <FormControlLabel value="Trade" control={<Radio />} label="Trade" />
                    </RadioGroup>
                </FormControl>
                <FormControl sx={{mb:3}}>
                    <FormLabel sx={{fontWeight:"bold", fontSize: 18}} id="demo-radio-buttons-group-label">Price
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="0-50" />
                            <FormControlLabel control={<Checkbox />} label="50-100" />
                            <FormControlLabel control={<Checkbox />} label="100-200" />
                        </FormGroup>
                    </FormLabel>
                </FormControl>
                <FormControl >
                    <FormLabel sx={{fontWeight:"bold", fontSize: 18}} id="demo-radio-buttons-group-label">Availability
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="24hr delivery" />
                            <FormControlLabel control={<Checkbox />} label="Limited availability" />
                            <FormControlLabel control={<Checkbox />} label="In stock" />
                        </FormGroup>
                    </FormLabel>
                </FormControl>
            </Box>

          



        </div>
    )
}

export default DashboardForm
