import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React from "react";
import Navbar from "../components/Navbar";
import UserInformation from '../components/UserInformation';
import ProfilePanel from '../components/ProfilePanel';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

function ProfilePage() {
  return (
    <div>
      <Navbar></Navbar>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{p:4}}
      >
          <Grid item xs={12} sm={12} md={3}>
            <Item elevation={15}>
              <UserInformation/>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Item elevation={15}>
              <ProfilePanel/>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Item sx={{height:80, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 1, borderColor: 'grey.500'}} elevation={0}>
              <InstagramIcon color="primary"/>
              <Typography component={'span'} sx={{ml:1}}>john.doe</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Item sx={{height:80, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 1, borderColor: 'grey.500'}} elevation={0}>
              <Link to="/profile" style={{textDecoration: 'none'}}>
                <Button variant="outlined">Add a review</Button>
              </Link>
            </Item>
          </Grid>
      </Grid>
    </div>
  );
}

export default ProfilePage;
