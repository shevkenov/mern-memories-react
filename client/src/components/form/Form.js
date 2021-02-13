import React, { useState, useEffect } from 'react'
import { TextField, Typography, Button, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyle from './styles';
import { createPost, editPost, clearPostId } from '../../actions/'

function Form() {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFiles: '' });
    const { posts } = useSelector(state => state);

    const classes = useStyle();
    const dispatch = useDispatch();

    useEffect(() => {
        
        if (posts.id) {
            const post = posts.allPosts.find(p => p._id === posts.id);

            setPostData({
                creator: post.creator,
                title: post.title,
                tags: post.tags,
                message: post.message,
                selectedFiles: post.selectedFiles
            })
        }
    }, [posts.id])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (posts.id) {
            dispatch(editPost(posts.id, postData));

            clear();
        }else{
            dispatch(createPost(postData));
        }
    }

    const clear = () => {
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
        dispatch(clearPostId());
    }

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Create a memories</Typography>
                <TextField name="creator" value={postData.creator} label="Creator" variant="outlined" fullWidth onChange={(e) => setPostData({ ...postData, [e.target.name]: e.target.value })} />
                <TextField name="title" value={postData.title} label="Title" variant="outlined" fullWidth onChange={(e) => setPostData({ ...postData, [e.target.name]: e.target.value })} />
                <TextField name="message" value={postData.message} multiline rows={4} label="Message" variant="outlined" fullWidth onChange={(e) => setPostData({ ...postData, [e.target.name]: e.target.value })} />
                <TextField name="tags" value={postData.tags} label="Tags" variant="outlined" fullWidth onChange={(e) => setPostData({ ...postData, [e.target.name]: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase multyple="false" type="file" onDone={({ base64 }) => setPostData({ ...postData, selectedFiles: base64 })} />
                </div>
                <Button type="submit" className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth>Submit</Button>
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
            </form>
        </Paper>
    )
};

export default Form;
