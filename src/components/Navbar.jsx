import { Box, Typography } from '@mui/material'
import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';
const Navbar = () => {
    return (
        <Box sx={{ display: "flex" }} >
            <Typography variant="h5" color="white" margin="auto 20px" >DiamondHood <DiamondIcon color="inherit" fontSize="md" />
            </Typography>
            <input type="text" placeholder='Search' />
        </Box>
    )
}

export default Navbar