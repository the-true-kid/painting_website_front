import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Box, CardMedia, Button } from '@mui/material';
import NavBar from '../components/NavBar';

const PaintingDetail = () => {
    const { id } = useParams();  // Get the painting ID from the route
    const [painting, setPainting] = useState(null);

    useEffect(() => {
        // Fetch the painting details from the backend
        axios.get(`http://localhost:5000/api/paintings/${id}`)
            .then(response => {
                setPainting(response.data);
            })
            .catch(error => {
                console.error('Error fetching painting details:', error);
            });
    }, [id]);

    // Handle email button click
    const handleEmail = () => {
        const subject = encodeURIComponent(`Interested in purchasing: ${painting.title}`);
        const body = encodeURIComponent(
            `Hello,\n\nI am interested in purchasing the painting "${painting.title}".\nPlease let me know the next steps.\n\nBest regards,`
        );
        const email = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
        window.location.href = email;
    };

    // If painting is not yet fetched, display a loading message
    if (!painting) {
        return <Typography>Loading painting details...</Typography>;
    }

    return (
        <>
            <NavBar />
            <Box sx={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
                {/* Display the main image */}
                <CardMedia
                    component="img"
                    image={`http://localhost:5000/static${painting.pictures[0].picture_url}`}
                    alt={painting.pictures[0].alt_text}
                    sx={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '2rem' }}
                />

                {/* Display painting details */}
                <Typography variant="h4" gutterBottom>{painting.title}</Typography>
                <Typography variant="body1" gutterBottom>{painting.description}</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Date Created: {new Date(painting.date_created).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Dimensions: {painting.width} x {painting.height} cm
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Price: ${painting.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Stock: {painting.stock > 0 ? `${painting.stock} available` : 'Out of stock'}
                </Typography>

                {/* Contact for Purchase Button */}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleEmail}
                    sx={{ marginTop: '1rem' }}
                >
                    Contact for Purchase
                </Button>
            </Box>
        </>
    );
};

export default PaintingDetail;
