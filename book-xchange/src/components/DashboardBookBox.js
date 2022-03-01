import React from 'react'
import { Box } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function DashboardBookBox() {
    return (
        <div>
            <Box sx={{ flexGrow: 1, m: 4 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(9)).map((_, index) => (
                        <Grid sx={{width: 150, }} item xs={4} sm={4} md={4} key={index}>
                            <Link style={{textDecoration: 'none'}} to="/addbook">
                            <Item sx={{height: 250}}>Book Cover</Item>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Pagination sx={{display: "flex", justifyContent: "center"}} count={10} variant="outlined" color="primary" />

        </div>
    )
}

export default DashboardBookBox

