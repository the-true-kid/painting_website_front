import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import PaintingCard from '../components/PaintingCard';
import NavBar from '../components/NavBar';

function Gallery() {
    const [paintings, setPaintings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/paintings')
            .then(response => {
                setPaintings(response.data);
            });
    }, []);

    return (
        <>
        <NavBar />
        <Grid container spacing={4} justifyContent="center">
            {paintings.map(painting => (
                <Grid item key={painting.id}>
                    <PaintingCard painting={painting} />
                </Grid>
            ))}
        </Grid>
        </>
    );
}

export default Gallery;
