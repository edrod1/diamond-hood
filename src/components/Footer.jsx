import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <Box>
                <Container maxWidth="lg">
                    <Grid align="center" columnSpacing="12" gutterbottom>
                        <Grid columnGap={12}>
                            links
                        </Grid>
                        <Grid>
                            footer
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer