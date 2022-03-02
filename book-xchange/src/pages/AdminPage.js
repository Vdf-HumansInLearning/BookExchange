import * as React from 'react';
import Navbar from '../components/Navbar'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';


function AdminPage() {


  //fetch from server
  const users = [
    {id: 1, firstName: 'user1', lastName: 'gigel', userName: 'gigi', email:'gigi@gmail@gmail.com', phoneNumber: '0755156212'},
    {id: 2, firstName: 'user2', lastName: 'gigel', userName: 'gigicai', email:'gigi@gmail@gmail.com', phoneNumber: '07551527712'},
    {id: 3, firstName: 'banana', lastName: 'gigel', userName: 'gidsdgi', email:'gigi@gmail@gmail.com', phoneNumber: '07551521772'}
  ] 

  function createData(id, firstName, lastName, userName, email, phoneNumber) {
    return { id, firstName, lastName, userName,email, phoneNumber };
  }

  const rows = users.map((row)=>{
    return createData(row.id,row.firstName,row.lastName,row.userName,row.email,row.phoneNumber)
  })
  

  return (
    <div>
        <Navbar></Navbar>
        
        <Box sx={{display: 'flex', flexDirection: 'column', margin: '0 auto', width: '90%'}}>
        <Autocomplete sx={{ my:4 }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={users.map((user) => user.firstName)}
        renderInput={(params) => (
          <TextField sx={{width:300}}
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />

      <TableContainer component={Paper} >
            <Table sx={{ minWidth: 600}} aria-label="simple table"  >
              <TableHead >
                <TableRow >
                  <TableCell>Id</TableCell>
                  <TableCell  align="right">First Name</TableCell>
                  <TableCell align="right">Last name</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">E-mail</TableCell>
                  <TableCell align="right">Phone number</TableCell>
                  <TableCell align="right">Block</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.firstName}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.userName}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phoneNumber}</TableCell>
                    <TableCell align="right">{'Block'}</TableCell>
                    <TableCell align="right">{'Delete'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
        </Box>
        
  
    </div>
  )
}

export default AdminPage