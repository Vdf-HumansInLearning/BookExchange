import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';


function BookList() {
  return (
    <>
        {Array.from(Array(6)).map((_, index) => (
        <Grid container spacing={2} key={index} sx={{p: 2, mb: 3, border: 1, borderColor: 'success.light' }}>
        <Grid item xs={12} sm={3} md={3} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Box sx={{width: 100, height:100, border: 1}}>Book Cover</Box>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
            <Typography sx={{fontWeight:'bold'}}>Title {index+1}</Typography>
            <Typography sx={{textAlign: 'left', fontSize: 15}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ...</Typography>
        </Grid>
        </Grid>
        ))}
    </>
  );
}

export default BookList;
