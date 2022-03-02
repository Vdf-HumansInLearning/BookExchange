import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


export default function AddBookForm() {
    const [choose, bookType] = React.useState('');

    const handleBookTypeChange = (event) => {
        bookType(event.target.value);
    };
    const [quality, setQuality] = React.useState('');

    const handleQualityChange = (event) => {
        setQuality(event.target.value);
    };

    return (
        <div>
            <Box sx={{ textAlign: "center", mt: 3 }}>
                <Typography sx={{ fontSize: 34 }} >Add book</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Choose</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={choose}
                        onChange={handleBookTypeChange}
                        autoWidth
                        label="Choose"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Buy</MenuItem>
                        <MenuItem value={21}>Borrow</MenuItem>
                        <MenuItem value={22}>Trade</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", my:4, mx: 20 }}>
                <TextField sx={{ mb: 2 }} id="outlined-basic" label="ISBN" variant="outlined" />
                <TextField sx={{ mb: 2 }} id="outlined-basic" label="Title" variant="outlined" disabled />
                <TextField sx={{ mb: 2 }} id="outlined-basic" label="Author" variant="outlined" disabled />
                <TextField
                    sx={{ mb: 2 }}
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    label="Description"
                    disabled
                />
                <TextField sx={{ mb: 2 }} id="outlined-basic" label="Edition" variant="outlined" disabled />
                <TextField sx={{ mb: 2 }} id="outlined-basic" label="Keywords" variant="outlined" disabled>
                </TextField>
                <TextField sx={{ mb: 2 }} id="outlined-basic" label="Number of Pages" variant="outlined" disabled />
                <FormControl >
                    <InputLabel id="demo-simple-select-autowidth-label">Quality Level</InputLabel>
                    <Select

                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={quality}
                        onChange={handleQualityChange}
                        autoWidth
                        label="Quality Level"
                    >
                        <MenuItem sx={{ minWidth: 320 }} value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={11}>New</MenuItem>
                        <MenuItem value={23}>Used</MenuItem>
                        <MenuItem value={24}>Old</MenuItem>
                    </Select>
                </FormControl>

            </Box>
            <Box sx={{ textAlign: "center" }}>
                <Button variant="contained">Add Book</Button>

            </Box>
        </div>
    );
}