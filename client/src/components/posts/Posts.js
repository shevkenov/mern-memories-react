import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'


import Post from './Post/Post';
import useStyle from './styles';

function Posts() {
    const { posts } = useSelector(state => state);
    const classes = useStyle();

    //console.log(posts.allPosts);
    return (
        !posts.allPosts.length ? <CircularProgress /> : (
            <Grid container spacing={3} alignItems="stretch" className={classes.mainContainer}>
                {
                    posts.allPosts.map(postData => (
                        <Grid key={postData._id} item xs={12} sm={6} md={6}>
                            <Post post={postData}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts
