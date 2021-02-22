import React from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import memories from '../../images/memories.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    const user = null

    return (
        <AppBar position="static" color="inherit" className={classes.appBar}>
            <div>
                <Typography component={Link} to="/" variant="h2" align="center" className={classes.heading}>
                    Memories
                </Typography>
                <img src={memories} alt="memories" height="60" width="60" className={classes.image} />
            </div>
            <Toolbar>
                {
                    user ?  (
                        <div>
                            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl} >{user?.result.name.chart(0)}</Avatar>
                            <Typography className={classes.userName} variant={6}>{user?.result.name}</Typography>
                            <Button className={classes.logout} variant='contained' color='secondary'>Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant='contained' color='primary'>Sign In</Button>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
