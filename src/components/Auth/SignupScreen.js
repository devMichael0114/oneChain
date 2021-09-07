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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import useSignupUser from './hooks/useSignupUser'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import Checkbox from '@mui/material/Checkbox'
import PasswordStrengthBar from 'react-password-strength-bar'
import FcGoogle from '@meronex/icons/fc/FcGoogle'
import FaFacebook from '@meronex/icons/fa/FaFacebook'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});      

const SignupScreen = (props) => {
    const [toggleLoginForm, setToggleLoginForm] = useState(true)
    const { uiState } = useContext(UIContext);
    const classes = useStyles()
    const theme = useTheme()
    const xsScreen = useMediaQuery(theme.breakpoints.only('xs'))
    const smScreen = useMediaQuery(theme.breakpoints.only('sm'))
    const [checkRobot, setCheckRobot] = useState(false);
    const [recaptcha, setRecaptcha] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [signValues, setSignValues] = useState({
        amount: '',
        password: 'geostar0620',
        confirmPW: 'geostar0620',
        showPassword: false,
        showConfirmPW: false,
        accountType: 'individual',
    });

    const {
        loadingSign,
        errorSign,
        handleSignupUser,
        handleNameChange,
        handleLastNameChange,
        handleSignPasswordChange,
        handleSignEmailChange,
        handleConfirmPasswordChange,
    } = useSignupUser()
    
    const handleAccountTypeChange = (event) => {
        setSignValues({ ...signValues, accountType : event.target.value });
    };

    const handleSignChange = (prop) => (event) => {
        setSignValues({ ...signValues, [prop]: event.target.value });
        handleSignPasswordChange(event);
    };

    const handleConfirmPWChange = (prop) => (event) => {
        setSignValues({ ...signValues, [prop]: event.target.value });
        handleConfirmPasswordChange(event);
    };

    const handleClickShowConfirmPassword = () => {
        setSignValues({ ...signValues, showConfirmPW: !signValues.showConfirmPW });
    };

    const handleClickShowPW = () => {
        setSignValues({ ...signValues, showPassword: !signValues.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };
  
    const handleClose = (event) => {
        setCheckRobot(false);
        if ( recaptcha === true )
        {
            handleSignupUser(event);
            setSignupSuccess(true);
        }    
    };

    const handleSignup = (event) => {
        setCheckRobot(true);
        //setSignupSuccess(true);
        if ( recaptcha === false )
            setCheckRobot(true);
    }

    const changeAuthScreen = (screenName) => {
        props.changeAuthScreen(screenName);
    }
   
    return (
        signupSuccess === false ?
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
                                    Welcome to ONEChain
                                </Typography>
                                <div style={{marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center"}}>
                                    <Typography
                                        style={{
                                        fontWeight: 400,
                                        marginLeft: '0px',
                                        color: uiState.darkMode ? 'white' : 'grey',
                                        }}
                                        variant="body2"
                                    >
                                        Already have an account?
                                    </Typography>
                                    
                                    <Button color="primary" className={classes.lowerCaseBtn} onClick={() => changeAuthScreen('login')}>Sign In</Button>
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
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                        <FormControl className={classes.margin} style={{width: '48%'}}>
                                            <Typography
                                                variant="h6"
                                                style={{
                                                fontWeight: 400,
                                                fontSize: 13,
                                                color: uiState.darkMode ? 'white' : 'grey',
                                                textAlign: 'left'
                                                }}
                                            >
                                                First Name
                                            </Typography>
                                            <OutlinedInput
                                                placeholder="First name ..."
                                                id="input-with-icon-adornment"
                                                margin="dense"
                                                onChange={handleNameChange}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin} style={{width: '48%'}}>
                                            <Typography
                                                variant="h6"
                                                style={{
                                                    fontWeight: 400,
                                                    fontSize: 13,
                                                    color: uiState.darkMode ? 'white' : 'grey',
                                                    textAlign: 'left'
                                                }}
                                            >
                                                Last Name(optional)
                                            </Typography>
                                            <OutlinedInput
                                                placeholder="Last name ..."
                                                id="input-with-icon-adornment"
                                                margin="dense"
                                                onChange={handleLastNameChange}
                                            />
                                        </FormControl>
                                    </div>
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
                                            onChange={handleSignEmailChange}
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
                                            type={signValues.showPassword ? 'text' : 'password'}
                                            value={signValues.password}
                                            onChange={handleSignChange('password')}
                                            margin="dense"
                                            placeholder="Password ..."
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPW}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                {signValues.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                        />
                                        <PasswordStrengthBar password={signValues.password} />
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
                                            Confirm Password
                                        </Typography>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={signValues.showConfirmPW ? 'text' : 'password'}
                                            value={signValues.confirmPW}
                                            onChange={handleConfirmPWChange('confirmPW')}
                                            margin="dense"
                                            placeholder="Confirm Password ..."
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowConfirmPassword}
                                                    onMouseDown={handleMouseDownConfirmPassword}
                                                    edge="end"
                                                >
                                                {signValues.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <FormControl component="fieldset" style={{marginTop: '20px'}}>
                                        <FormLabel component="legend"
                                            style={{
                                                fontWeight: 400,
                                                fontSize: 13,
                                                color: uiState.darkMode ? 'white' : 'black',
                                                textAlign: 'left'
                                            }}
                                        >Select account type below</FormLabel>
                                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="individual"
                                            value={signValues.accountType}
                                            onChange={handleAccountTypeChange}>
                                            <FormControlLabel value="individual" control={<Radio color="primary"/>} label="Individual" />
                                            <FormControlLabel value="business" control={<Radio color="primary"/>} label="Business" />
                                        </RadioGroup>
                                    </FormControl>
                                    <div style={{marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "flex-end"}}>
                                        <Typography
                                            style={{
                                            fontWeight: 400,
                                            fontSize: 12,
                                            lineHeight: '27px',
                                            color: uiState.darkMode ? 'white' : 'grey',
                                            }}
                                            variant="body2"
                                        >
                                            By clicking Create Account, you agree that you've read and accepted our <a href="#">Terms &amp; Conditions</a> , you consent to our <a href="#">Privacy Policy</a> , <a href="#">Cookie use</a>  and that you will receive notifications from ONEChain.
                                        </Typography>
                                    </div>
                                    <div style={{textAlign: 'center'}}>
                                        <Button variant="contained" color="primary" disableElevation className={classes.lowerCaseBtn} 
                                            style={{
                                                width: '200px',
                                                height: '50px',
                                                background: '#009Ef6',
                                            }}
                                            onClick={handleSignup}
                                        >
                                            Sign Up
                                        </Button>
                                    </div>
                                </div>
                                <Dialog
                                    open={checkRobot}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                    style = {{
                                        padding : 10
                                    }}
                                >
                                    <Grid container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        style={{paddingLeft: 10, paddingRight: 10}}
                                        >
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={recaptcha} onChange={() => setRecaptcha(!recaptcha)} name="gilad" />
                                            }
                                            label="I'm not a robot"
                                        />
                                        <img src="/RecaptchaLogo.png" alt="Recaptcha" width="50" height="50" />
                                    </Grid>
                                    <DialogActions>
                                        <Button onClick={(event) => handleClose(event)} variant="contained" color="primary" style={{margin: 'auto', background: '#009Ef6', paddingLeft : 10, paddingRight : 10}}>Submit</Button>
                                    </DialogActions>
                                </Dialog>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        :
            <Grid container 
                style={( smScreen || xsScreen )?{
                    flexDirection : 'column', 
                    width: '100%',
                    padding: '1rem',
                    background: 'white',
                    marginTop: '84px',
                    justifyContent: 'center', 
                    alignItems:'center',
                    marginBottom: '20px'
                }: {
                    flexDirection : 'column', 
                    width: '100%',
                    padding: '1rem',
                    background: 'white',
                    marginTop: '84px',
                    justifyContent: 'center', 
                    alignItems:'center',
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
                    <Grid container>
                        <Grid item style={{margin: 120, width: '650px'}}>
                            <Box>
                                <Typography
                                    variant="h5"
                                    style={{
                                    fontWeight: 800,
                                    color: uiState.darkMode ? 'white' : 'black',
                                    textAlign: 'center'
                                    }}
                                >
                                    Thank you for registering!
                                </Typography>
                                <div style={{marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
                                    <Typography
                                        style={{
                                        fontWeight: 400,
                                        marginLeft: '20px',
                                        color: uiState.darkMode ? 'white' : 'grey',
                                        }}
                                        variant="body2"
                                    >
                                        A confirmation link has been sent to your email. To Sign in please check your inbox.
                                    </Typography>
                                    <img
                                        src='/Registration.png'
                                        alt="logo"
                                        style={{display: 'flex', justifyContent : 'center', alignItems : 'center', width: '60%', marginLeft : 40}}
//                                        style={(smScreen || xsScreen )?{width: '300px'}: {width: '60%'}}
                                    />
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems : 'center', justifyContent : 'center'}}>
                                    <div style={{textAlign: 'center'}}>
                                        <Button variant="outlined" color="primary" disableElevation className={classes.lowerCaseBtn} 
                                            style={{
                                                width: '160px',
                                                height: '50px',
                                                background: 'primary',
                                            }}
                                            onClick={handleSignup}
                                        >
                                            Resend link
                                        </Button>
                                    </div>
                                    <div style={{textAlign: 'center', marginLeft : 20}}>
                                        <Button variant="contained" color="primary" disableElevation className={classes.lowerCaseBtn} 
                                            style={{
                                                width: '160px',
                                                height: '50px',
                                                background: '#009Ef6',
                                            }}
                                            onClick={() => changeAuthScreen('login')}
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

export default SignupScreen
