import React from 'react'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';



function DetailsLayout() {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "93vh",

                }}
            >
                {/* Left */}
                <Paper sx={{ width: 650, height: 750, mr: 4, p:3, textAlign: "center" }} elevation={20} >Book Cover</Paper>

                {/* Right */}
                <Paper sx={{ width: 650, height: 750, p: 3, display: "flex", flexDirection: "column", justifyContent:"space-between" }} elevation={3} >
                    <Paper sx={{ width: 600, height: 250 }} elevation={20} >
                        <Box sx={{ py: 3, px: 3, lineHeight: 4 }}>
                            <Typography>
                                Title:
                            </Typography>
                            <Typography>
                                Author:
                            </Typography>
                            <Typography>
                                Category:
                            </Typography>
                            <Typography>
                                Edition:
                            </Typography>
                            <Typography>
                                Number of Pages:
                            </Typography>
                            <Typography>
                                ISBN:
                            </Typography>
                        </Box>
                    </Paper>
                    <Paper sx={{ width: 250, height: 100 }} elevation={20} >
                        <Box sx={{ p: 3 }}>
                            <Typography>
                                Bonus Points:
                            </Typography>
                            <Typography>
                                Estimated Delivery:
                            </Typography>

                        </Box>
                    </Paper>
                    <Box sx={{ display: "flex", justifyContent:"space-between" }}>
                        <Button sx={{ width: 251 }} variant="contained">Add to Cart</Button>
                        <Paper sx={{ width: 150, height: 37, pl:2, pt: 1 }} elevation={20}>Price:</Paper>
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}

export default DetailsLayout