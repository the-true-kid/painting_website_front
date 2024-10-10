import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PaintingCard from '../components/PaintingCard';
import NavBar from '../components/NavBar';
function Home() {
    const [paintings, setPaintings] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/paintings?limit=3')
            .then(response => {
                setPaintings(response.data);
            });
    }, []);
    

    return (
        <>
        <NavBar />
        <Box sx={{ padding: '2rem' }}>
            <Typography variant="h2" gutterBottom>
                Welcome to My Art Gallery
            </Typography>
            <Typography variant="body1" gutterBottom>
                Discover a collection of unique paintings that capture the beauty and emotions of various subjects.
            </Typography>

            {/* Featured Paintings Section */}
            <Grid container spacing={4} justifyContent="center">
                {paintings.map(painting => (
                    <Grid item key={painting.id}>
                        <PaintingCard painting={painting} />
                    </Grid>
                ))}
            </Grid>

            {/* Button to explore the gallery */}
            <Box textAlign="center" marginTop="2rem">
                <Link to="/gallery" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" size="large">
                        Explore the Gallery
                    </Button>
                </Link>
            </Box>
        </Box>
        </>
    );
    
}

export default Home;
