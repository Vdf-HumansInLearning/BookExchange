import { Box } from '@mui/material'
import React from 'react'
import DashboardBookBox from '../components/DashboardBookBox'
import DashboardForm from '../components/DashboardForm'
import Navbar from '../components/Navbar'


function Dashboard() {
  return (
    <div>
      <Navbar></Navbar>
      <Box sx={{display: "flex"}}>
        <DashboardForm></DashboardForm>
        <DashboardBookBox></DashboardBookBox>
      </Box>

    </div>
  )
}

export default Dashboard
