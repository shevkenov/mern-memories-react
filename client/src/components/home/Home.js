import React, { useEffect } from 'react'
import { Container, Grid, Grow } from '@material-ui/core';

import Posts from '../posts/Posts';
import Form from '../form/Form';

import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { getAllPosts } from '../../actions/';

const Home = () => {
    const dispatch = useDispatch();
    const classes = useStyles()

    useEffect(() => {
        dispatch(getAllPosts());
    }, [])

    return (
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
    )
}

export default Home
