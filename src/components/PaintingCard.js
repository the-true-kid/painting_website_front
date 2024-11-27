import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PaintingCard = ({ painting }) => {
    return (
        <Card sx={{ maxWidth: 300, margin: 'auto', cursor: 'pointer' }}>
            <Link to={`/painting/${painting.id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={`http://localhost:5000${painting.picture_url}`} // Use picture_url directly
                    alt={painting.alt_text || 'No image available'} // Use alt_text or fallback
                    sx={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {painting.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {painting.description}
                </Typography>
                <Typography variant="h6" color="text.primary" gutterBottom>
                    ${painting.price}
                </Typography>
                <Link to={`/painting/${painting.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="primary" fullWidth>
                        See More
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default PaintingCard;
