import React, { useEffect } from 'react'
import { Container, Grid, Grow, Typography, AppBar } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import memories from './images/memories.png';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import useStyles from './styles';
import { getAllPosts } from './actions';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [])

    const classes = useStyles()
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit" className={classes.appBar}>
                <Typography variant="h2" align="center" className={classes.heading}>
                    Memories
                </Typography>
                <img src={memories} alt="memories" height="60" width="60" className={classes.image}/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
