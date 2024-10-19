import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Art Gallery
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/">
                        Gallery
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
