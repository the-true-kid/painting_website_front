import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const PaintingCard = ({ painting }) => {
    return (
        <Link to={`/painting/${painting.id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 300, margin: 'auto', cursor: 'pointer' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={`http://localhost:5000/static${painting.pictures[0].picture_url}`}
                    alt={painting.pictures[0].alt_text}
                    sx={{
                        objectFit: 'cover',  // Ensures the image covers the container
                        objectPosition: 'center',
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {painting.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {painting.description}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default PaintingCard;
