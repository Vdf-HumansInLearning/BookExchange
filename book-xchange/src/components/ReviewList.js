import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';


function ReviewList() {
  return (
    <>
        {Array.from(Array(6)).map((_, index) => (
        <Grid container spacing={2} key={index} sx={{p: 2, mb: 3, border: 1, borderColor: 'primary.main'}}>
        <Grid item xs={12} sm={3} md={3} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Box sx={{width: 100, height:100, border: 1}}>Profile Picture</Box>
        </Grid>
        <Grid item xs={12} sm={9} md={9} sx={{textAlign:'left'}}>
            <Typography>
                <Rating name="read-only" value={4} readOnly />
            </Typography>
            <Typography component={'span'} sx={{fontSize: 15, fontWeight: 'bold'}}>User{index + 1} - </Typography><Typography component={'span'} sx={{fontSize: 15, fontStyle: 'italic'}}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since"</Typography>
        </Grid>
        </Grid>
        ))}
    </>
  );
}

export default ReviewList;
