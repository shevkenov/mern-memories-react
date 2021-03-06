import React, { useState } from 'react';
import { Container, Paper, Avatar, Typography, Grid, Button, CircularProgress, Modal } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

import { login, signUp } from '../../actions'
import useStyles from './styles';
import Input from './Input';
import Icon from './Icon'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const dispatch = useDispatch();
    const histroy = useHistory();
    const { auth } = useSelector(state => state);
    console.log(auth);


    const classes = useStyles();
    const [isSignup, setSignup] = useState('false');
    const [form, setForm] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => setForm(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const switchMode = () => {
        setSignup(!isSignup);
        setForm(initialState);
        setShowPassword(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signUp(form, histroy));
        } else {
            dispatch(login(form, histroy));
        }
    }

    const googleSuccess = () => {
        console.log('Google Login Succeed');
    }

    const googleError = () => {
        console.log('Google login filed');
    }

    return (
        <Container component="main" maxWidth="xs">
            {
                auth.loading
                    ? <div className={classes.progress}>
                        <CircularProgress size={80} />
                    </div>
                    : (
                        <Paper elevation={3} className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    {
                                        isSignup && (
                                            <>
                                                <Input name="firstName" label="First Name" autoFocus handleChange={handleChange} half />
                                                <Input name="secondName" label="Second Name" handleChange={handleChange} half />
                                            </>
                                        )
                                    }

                                    <Input name="email" label="Email" handleChange={handleChange} />
                                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={() => setShowPassword(!showPassword)} />
                                    {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                                </Grid>
                                {
                                    auth.error ? (
                                        <Grid>
                                            <Typography color="error" variant="h5">{auth.error}</Typography>
                                        </Grid>
                                    ) : null
                            }
                                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                    {isSignup ? 'Sign Up' : 'Sign In'}
                                </Button>
                                <GoogleLogin
                                    clientId="598642521694-evtu9843jgf6tpu5mg8m69qqshqbrt4r.apps.googleusercontent.com"
                                    render={(renderProps) => (
                                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                            Google Sign In
                                        </Button>
                                    )}
                                    onSuccess={googleSuccess}
                                    onFailure={googleError}
                                    cookiePolicy="single_host_origin"
                                />
                            </form>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Button onClick={switchMode}>
                                        {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    )
            }
        </Container>
    )
}

export default Auth
