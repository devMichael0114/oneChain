import React, { useContext, useState } from 'react'
import useStyles from './styles'
import {
    useTheme,
    Button,
    useMediaQuery,
    Grid,
    Typography,
    Box,
} from '@mui/material'
import { UIContext } from '../../App'
import FcGoogle from '@meronex/icons/fc/FcGoogle'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import useLoginUser from './hooks/useLoginUser'
import FaFacebook from '@meronex/icons/fa/FaFacebook'

const LoginScreen = (props) => {
    const { uiState } = useContext(UIContext);
    const classes = useStyles()
    const theme = useTheme()
    const xsScreen = useMediaQuery(theme.breakpoints.only('xs'))
    const smScreen = useMediaQuery(theme.breakpoints.only('sm'))
    const [values, setValues] = useState({
        amount: '',
        password: '',
        showPassword: false,
    });

    const {
        handleLoginUser,
        handlePasswordChange,
        handleEmailChange,
      } = useLoginUser()
   
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        handlePasswordChange(event);
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changeAuthScreen = (screenName) => {
        props.changeAuthScreen(screenName);
    }
   
    return (
        <Grid container 
            style={( smScreen || xsScreen )?{
                flexDirection : 'row', 
                width: '100%',
                padding: '1rem',
                flex: '1 1 auto',
                background: 'white',
                marginTop: '120px',
                marginBottom: '20px'
            }: {
                flexDirection : 'row', 
                width: '100%',
                padding: '1rem',
                flex: '1 1 auto',
                background: 'white',
                marginTop: '84px',
                marginBottom: '20px'
            }}
        >
            <Grid item xs={12} sm={12} md={6} lg={6} 
                style={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems:'center'
                }}
            >
                <img
                    src='/Registration.png'
                    alt="logo"
                    style={{width: '90%', marginLeft:'15%'}}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}
                style={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems:'center'
                }}
            >
                <Grid container style = {{marginTop : '60px', marginBottom : '60px'}}>
                    <Grid item style={{margin: 'auto', width: '85%'}}>
                        <Box>
                            <Typography
                                variant="h5"
                                style={{
                                fontWeight: 800,
                                color: uiState.darkMode ? 'white' : 'black',
                                textAlign: 'center'
                                }}
                            >
                                Welcome back to ONEChain
                            </Typography>
                            <div style={{marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center"}}>
                                <Typography
                                    style={{
                                    fontWeight: 400,
                                    marginLeft: '0px',
                                    color: uiState.darkMode ? 'white' : 'grey'
                                    }}
                                    variant="body2"
                                >
                                    Sign in or
                                </Typography>
                                
                                <Button color="primary" className={classes.lowerCaseBtn}
                                    onClick={() => changeAuthScreen('signup')}>Create an account</Button>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    style={{width: '48%'}}
                                    className={classes.lowerCaseBtn}
                                    startIcon={
                                      <FaFacebook
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            color: !uiState.darkMode ? '#315397' : null,
                                            marginRight: '8px',
                                            }}
                                        />
                                    }
                                >
                                    Login with Facebook
                                </Button>
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  style={{width: '48%'}}
                                  className={classes.lowerCaseBtn}
                                  startIcon={
                                    <FcGoogle
                                      style={{
                                        width: '30px',
                                        height: '30px',
                                        color: !uiState.darkMode ? 'rgb(0,133,243)' : null,
                                        marginRight: '8px'
                                      }}
                                    />
                                  }
                                >
                                  Login with Google
                                </Button>
                            </div>
                            
                            <div style={{width:'100%', height: '1px', background: '#939393', position: 'relative', marginTop: '20px', marginBottom: '30px'}}>
                                <p style={{padding: '5px', color:'grey', background: 'white', position: 'absolute', top: '-30px', left: '50%', transform: `translateX(-50%)`}}>or</p>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <FormControl className={classes.margin}>
                                    <Typography
                                        variant="h6"
                                        style={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        color: uiState.darkMode ? 'white' : 'grey',
                                        textAlign: 'left'
                                        }}
                                    >
                                        Email address
                                    </Typography>
                                    <OutlinedInput
                                        placeholder="Email ..."
                                        id="input-with-icon-adornment"
                                        margin="dense"
                                        onChange={handleEmailChange}
                                        startAdornment={
                                            <InputAdornment position="start"/>
                                        }
                                    />
                                </FormControl>
                                <FormControl className={classes.margin}>
                                    <Typography
                                        variant="h6"
                                        style={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        color: uiState.darkMode ? 'white' : 'grey',
                                        textAlign: 'left'
                                        }}
                                    >
                                        Password
                                    </Typography>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        margin="dense"
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        
                                    />
                                </FormControl>
                                
                                <div style={{marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "flex-end"}}>
                                    <Typography
                                        style={{
                                        fontWeight: 400,
                                        marginLeft: '20px',
                                        color: uiState.darkMode ? 'white' : 'grey',
                                        }}
                                        variant="body2"
                                    >
                                        Forgot password?
                                    </Typography>
                                    <Button color="primary" className={classes.lowerCaseBtn}
                                        onClick={() => changeAuthScreen('forget')}>Reset</Button>
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <Button variant="contained" color="primary" disableElevation className={classes.lowerCaseBtn} 
                                        style={{
                                            width: '200px',
                                            height: '50px',
                                            background: '#009Ef6',
                                        }}
                                        onClick = {handleLoginUser}
                                    >
                                        Sign In
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LoginScreen
