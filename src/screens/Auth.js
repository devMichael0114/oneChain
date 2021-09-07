import React, { useContext, useState } from 'react'
import useStyles from './styles'
import {
    AppBar,
    Toolbar,
    useTheme,
    Button,
    useMediaQuery,
    Grid,
    Typography,
    Box,
} from '@mui/material'
import { UIContext } from '../App'
import { Fragment } from 'react'
import ForgetPassword from '../components/Auth/ForgetPassword'
import LoginScreen from '../components/Auth/LoginScreen'
import SignupScreen from '../components/Auth/SignupScreen'

const Auth = () => {
    const { uiState } = useContext(UIContext);
    const classes = useStyles()
    const [authScreen, setAuthScreen] = useState('login');
    
    const theme = useTheme(); 
    const xsScreen = useMediaQuery(theme.breakpoints.only('xs'))
    const smScreen = useMediaQuery(theme.breakpoints.only('sm'))

    const changeAuthScreen = (screenName) => {
        console.log("please change auth screen = ", screenName)
        setAuthScreen(screenName);
    }

    return (
        <Fragment>
            <AppBar 
                style={{
                    backgroundColor: !uiState.darkMode ? 'white' : 'rgb(36,37,38)', zIndex:"10000", boxShadow:'none',
                }}
                className={classes.root}
                elevation={1}
            >
                <Toolbar style={
                        (xsScreen||smScreen)?
                        {textAlign: 'center', display: 'block'}
                        :
                        {display: 'flex', flexDirection: 'row', alignItems:'center'}
                    }>
                    <div className={classes.leftMenu} style={
                        (xsScreen||smScreen)?
                        {justifyContent: 'center', padding: 10}
                        :
                        {display: 'flex', flexDirection: 'row', alignItems:'center'}
                    }>
                        <img
                            src='/mainLogo.png'
                            style={{ height: '32px' }}
                            alt="logo"
                        />
                        {
                            xsScreen || smScreen ?
                            <></>
                            :
                            <img
                                src='/logoText.png'
                                style={{ height: '19px' }}
                                alt="logo"
                            />
                        }
                    </div>
                    <div className={classes.rightMenu} style={
                        (xsScreen||smScreen)?
                        {justifyContent: 'center'}
                        :
                        {}
                    }>
                        <Typography
                            style={
                            (xsScreen||smScreen)?
                            {
                                fontWeight: 400,
                                color: uiState.darkMode ? 'white' : 'grey',
                            }
                            :
                            {
                            fontWeight: 400,
                            marginLeft: '20px',
                            color: uiState.darkMode ? 'white' : 'grey',
                            }}
                            variant="body2"
                        >
                            {authScreen === 'signup' ? "Already have an account?" : "Don't have an account?"}
                        </Typography>
                        <Button color="primary" className={classes.lowerCaseBtn}
                            onClick={() => authScreen === 'login' ? setAuthScreen('signup') : setAuthScreen('login')}
                        >{authScreen === 'signup' ? "Sign In" : authScreen === 'forget' ? 'Sign In' : "Sign up"}</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Box style={{
                display: 'flex', 
                flexDirection: 'column', 
                background: '#E5E5E5',
                justifyContent:'center',
                width: '100%',
                minHeight: '100vh'
            }}>
                {
                    authScreen === 'login' &&
                    <LoginScreen changeAuthScreen={changeAuthScreen}/>
                }
                {
                    authScreen === 'signup' &&
                    <SignupScreen changeAuthScreen={changeAuthScreen}/>
                }
                {
                    authScreen === 'forget' &&
                    <ForgetPassword changeAuthScreen={changeAuthScreen}/>
                }
                <Box
                    component="footer"
                    sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    }}
                    style={{
                        width: '100%',
                        padding: '10px 24px',
                        background: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 'auto'
                    }}
                >
                    <Grid container>
                        <Grid item xs={12} sm={12} lg={6} style={
                            (xsScreen||smScreen)?
                            {textAlign: 'center', paddingBottom: 10}
                            :
                            {display: 'flex', flexDirection: 'row', alignItems:'center'}
                            }>
                            <img
                                src='/mainLogo.png'
                                style={{ height: '32px' }}
                                alt="logo"
                            />
                            {
                                xsScreen || smScreen ?
                                <></>
                                :
                                <img
                                    src='/logoText.png'
                                    style={{ height: '19px' }}
                                    alt="logo"
                                />
                            }
                            
                            <Typography
                                style={
                                    (xsScreen||smScreen)?
                                {
                                fontWeight: 800,
                                color: uiState.darkMode ? 'white' : 'grey',
                                }
                                :
                                {
                                fontWeight: 800,
                                marginLeft: '20px',
                                color: uiState.darkMode ? 'white' : 'grey',
                                }
                            }
                                variant="body2"
                            >
                                &#169; Copyright ONEchain. All rights reserved.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} style={
                            (xsScreen||smScreen)?
                            {display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}
                            :
                            {display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'flex-end'}
                            }>
                            <Typography
                                style={{
                                fontWeight: 800,
                                marginLeft: '20px',
                                color: uiState.darkMode ? 'white' : 'grey',
                                }}
                                variant="caption"
                            >
                            <a href="#"> Terms &amp; Conditions</a>
                            </Typography>
                            <Typography
                                style={{
                                fontWeight: 800,
                                marginLeft: '20px',
                                color: uiState.darkMode ? 'white' : 'grey',
                                }}
                                variant="caption"
                            >
                                <a href="#">Privacy policy</a>
                            </Typography>
                            <Typography
                                style={{
                                fontWeight: 800,
                                marginLeft: '20px',
                                color: uiState.darkMode ? 'white' : 'grey',
                                }}
                                variant="caption"
                            >
                                <a href="#">Cookie use</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Auth
