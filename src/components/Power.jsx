import { Container, Typography } from '@mui/material'
import React from 'react'

const Power = () => {
    return (
        <main>
            <Container maxWidth="lg" >
                <Typography variant="h5">  Buying Power <span style={{ marginLeft: "30%" }}> Amount goes here</span></Typography>

            </Container>
        </main>
    )
}

export default Power        // <section className="power">
        //     <p className="power-title">Buying Power</p>
        //     <span className="power-amount"> $$$$</span>
        // </section>