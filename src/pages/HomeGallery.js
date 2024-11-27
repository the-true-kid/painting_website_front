import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import axios from 'axios';
import PaintingCard from '../components/PaintingCard';
import NavBar from '../components/NavBar';

function HomeGallery() {
    const [paintings, setPaintings] = useState([]);

    useEffect(() => {
        // Fetch all paintings
        axios.get('http://localhost:5000/api/paintings')
            .then(response => {
                setPaintings(response.data);
            })
            .catch(error => {
                console.error('Error fetching paintings:', error);
            });
    }, []);  // Run once on component mount

    return (
        <>
            <NavBar />
            <Box sx={{ padding: '2rem' }}>
                {/* Welcome Section */}
                <Typography variant="h2" gutterBottom>
                    Welcome to My Art Gallery
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Discover a collection of unique paintings that capture the beauty and emotions of various subjects.
                </Typography>

                {/* Paintings Grid */}
                <Grid container spacing={4} justifyContent="center">
                    {paintings.map(painting => (
                        <Grid item key={painting.id}>
                            <PaintingCard painting={painting} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

export default HomeGallery;
