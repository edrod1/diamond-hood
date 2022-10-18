import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
    return (
        <Box className="sidebar" sx={{
            // position: "fixed",
            marginRight: "auto",
            width: 300
        }}>
            <header className="sidebar-header" sx={{
                display: "flex",
                gap: 40,
            }}>
                <p>Stocks </p><span>...</span>
            </header>


            <section className="sidebar-card">
                <p></p>
            </section>
        </Box>
    )
}

export default Sidebar