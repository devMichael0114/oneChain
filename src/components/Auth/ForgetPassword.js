import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useStyles from './styles'
import axios from 'axios'
import {
  useTheme,
  Button,
  useMediaQuery,
  Typography,
  Box,
  Grid,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Visibility,
} from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { UIContext } from '../../App'

const url = process.env.REACT_APP_ENDPOINT

const screenDatas = [
  {
    type : 'find',
    title : 'First, let\'s find you account',
    subscript : 'Please enter your email or phone',
    placehold : 'Email or phone number',
    inputPlacehold : 'Please enter your email or phone number...',
    buttonOne : 'Back',
    buttonTwo : 'Find Account'
  },
  {
    type : 'verify',
    title : 'We just sent you a verification code',
    subscript : 'We just sent a verification code to your email. If you don\'t see our email in your inbox, check your spam folder.',
    placehold : 'Verification code',
    inputPlacehold : '863451',
    buttonOne : 'Back',
    buttonTwo : 'Submit'
  },
  {
    type : 'reset',
    title : 'Reset your password',
    subscript : 'Please enter a new password',
    placehold : 'Password',
    inputPlacehold : '*********',
    buttonOne : 'Back',
    buttonTwo : 'Submit'
  },
  {
    type : 'changed',
    title : 'Your password has been changed',
    subscript : 'A confirmation link has been sent to your email. To Sign In please check your inbox.',
    placehold : '',
    inputPlacehold : '',
    buttonOne : 'Back',
    buttonTwo : 'Submit'
  }
];

function ForgetPassword() {
  const history = useHistory()

  const { uiState } = useContext(UIContext);
  const classes = useStyles();
  const theme = useTheme();
  const xsScreen = useMediaQuery(theme.breakpoints.only('xs'));
  const smScreen = useMediaQuery(theme.breakpoints.only('sm'));
  const mdScreen = useMediaQuery(theme.breakpoints.only('md'));

  const [screenFlag, setScreenFlag] = useState("find");
  const [inputVal, setInputVal] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  let currentScreen = screenDatas.find(ele => ele.type === screenFlag);

  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleConfirmChange = (event) => {
    setConfirmPW(event.target.value);
  };

  const handleButtonOne = (event) => {
    if (screenFlag === 'verify')
    {
      setScreenFlag("find")
    }
    else if (screenFlag === 'reset')
    {
      setScreenFlag("verify")
    }
    else if (screenFlag === 'changed')
    {
      setScreenFlag("reset")
    }
    setInputVal("")
  }

  async function handleFindAccount(e) {
    e.preventDefault()

    try {
      const { data } = await axios.get(`${url}/api/auth/findaccount`,{params:{email:inputVal}})
      if ( data.state === true )
      {
        setEmail(inputVal)
        setScreenFlag("verify")
        setErrorMsg("")
        setInputVal("")
      }
      else 
      {
        setErrorMsg(" We could't find a ONE Chain account associated with this email")
      }
      console.log("sucess find account ======== ", data)
    }
    catch {
      setErrorMsg(" We could't find a ONE Chain account associated with this email")
      console.log("error find account ======= ")
    }
  }

  async function handleVerification(e) {
    e.preventDefault()

    if ( inputVal === "123456" )
    {
      setScreenFlag("reset")
      setErrorMsg("")
      setInputVal("")
    }
    else 
    {
      setErrorMsg("That's not the right code")
    }
  }

  async function handleResetPassword(e) {
    e.preventDefault()

    if ( inputVal === confirmPW )
    {
      setScreenFlag("changed")
      setErrorMsg("")
      setInputVal("")
    }
    else 
    {
      setErrorMsg("New password and confirm password error")
    }
  }
  // async function handleResetPassword(e) {
  //   e.preventDefault()

  //   if ( inputVal == confirmPW )
  //   {
  //     try {
  //       const { data } = await axios.post(`${url}/api/auth/forgetpassword`, {email : email, newpassword : inputVal})
  //       if ( data.state == true )
  //       {
  //         setScreenFlag("changed")
  //         setErrorMsg("")
  //         setInputVal("")
  //       }
  //       console.log("sucess find account ======== ", data)
  //     }
  //     catch {
  //       setErrorMsg(" Password Reset Error.")
  //       console.log("error find account ======= ")
  //     }
  //   }
  //   else 
  //   {
  //     setErrorMsg("New password and confirm password error")
  //   }
  // }

  const handleButtonTwo = (event) => {
    if (screenFlag === 'find')
    {
      handleFindAccount(event);
    }
    else if (screenFlag === 'verify')
    {
      handleVerification(event);
    }
    else if (screenFlag === 'reset')
    {
      handleResetPassword(event)
    }
  }

  return (
    <Grid container 
      style={( smScreen || xsScreen || mdScreen )?{
        flexDirection : 'column', 
        width: '100%',
        padding: '1rem',
        background: 'white',
        marginTop: '120px',
        justifyContent: 'center', 
        alignItems:'center',
        marginBottom: '20px',
        height: 'calc(100vh - 189px)'
      }: {
        flexDirection : 'column', 
        width: '100%',
        padding: '1rem',
        background: 'white',
        marginTop: '84px',
        justifyContent: 'center', 
        alignItems:'center',
        marginBottom: '20px',
        height: 'calc(100vh - 169px)'
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center'
        }}
      >
        <Grid container>
          <Grid item style={
            (smScreen || xsScreen)?
            {marginTop: 0, marginBottom: 200,  width : '100%'}
            :
            {marginTop: 0, marginBottom: 200, }
            }>
            <Box>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 800,
                  color: uiState.darkMode ? 'white' : 'black',
                  textAlign: 'center'
                }}
              >
                {currentScreen.title}
              </Typography>
              <div style={{marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", marginTop : 10}}>
                <Typography
                    style={{
                    fontWeight: 400,
                    color: uiState.darkMode ? 'white' : 'grey',
                    }}
                    variant="body2"
                >
                  {currentScreen.subscript}
                </Typography>
              </div>
              {
                errorMsg != '' &&
                <div style={{marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginTop : 10}}>
                  <img
                    src='/warning.png'
                    alt="warning"
                    style={{width: '15px', height : '15px', marginRight: 7}}
                  />
                  <Typography
                    style={{
                    fontWeight: 400,
                    color: 'red',
                    }}
                    variant="body2"
                  >
                    {errorMsg}
                  </Typography>
                </div>
              }
              <div style={{display: 'flex', flexDirection: 'column', alignItems : 'center', justifyContent: "center"}}>
                {
                  screenFlag != 'changed' &&
                  <div style={
                    (smScreen || xsScreen)?
                    {display: 'flex', flexDirection: 'column', justifyContent: "center", width : '100%'}
                    :
                    {display: 'flex', flexDirection: 'column', justifyContent: "center", width : '448px'}
                    }>
                    <Typography
                      variant="body2"
                      style={{
                        fontWeight: 400,
                        fontSize: 13,
                        color: uiState.darkMode ? 'white' : 'grey',
                        textAlign: 'left'
                      }}
                    >
                      {currentScreen.placehold}
                    </Typography>
                    <OutlinedInput
                      placeholder={currentScreen.placehold}
                      id="input-with-icon-adornment"
                      margin="dense"
                      value={inputVal}
                      onChange={handleChange}
                      startAdornment={
                        <InputAdornment position="start"/>
                      }
                      endAdornment={
                        screenFlag === 'reset' &&
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            //onClick={handleClickShowPassword}
                            //onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {true ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      style={{marginBottom : 20}}
                    />
                  </div>
                }
                {
                  screenFlag === 'reset' &&
                  <div style={
                    (smScreen || xsScreen)?
                    {display: 'flex', flexDirection: 'column', justifyContent: "center", width : '100%'}
                    :
                    {display: 'flex', flexDirection: 'column', justifyContent: "center", width : '448px'}
                    }>
                    <Typography
                      variant="body2"
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
                      placeholder={currentScreen.placehold}
                      id="input-with-icon-adornment"
                      margin="dense"
                      value={confirmPW}
                      onChange={handleConfirmChange}
                      startAdornment={
                        <InputAdornment position="start"/>
                      }
                      endAdornment={
                        screenFlag === 'reset' &&
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            //onClick={handleClickShowPassword}
                            //onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {true ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      style={{marginBottom : 20}}
                    />
                  </div>
                }
              </div>
              <div style={{display: 'flex', flexDirection: 'row', alignItems : 'center', justifyContent : 'center'}}>
                <div style={{textAlign: 'center'}}>
                  <Button variant="outlined" color="primary" disableElevation className={classes.lowerCaseBtn} 
                    style={
                      (smScreen || xsScreen)?
                      {background: 'primary',}
                      :
                      {
                      width: '212px',
                      height: '50px',
                      background: 'primary',
                    }}
                    onClick={handleButtonOne}
                  >
                  {currentScreen.buttonOne}
                  </Button>
                </div>
                <div style={{textAlign: 'center', marginLeft : 20}}>
                  <Button variant="contained" color="primary" disableElevation className={classes.lowerCaseBtn} 
                    style={
                      (smScreen || xsScreen)?
                      {background: 'primary',}
                      :
                      {
                      width: '212px',
                      height: '50px',
                      background: '#009Ef6',
                    }}
                    onClick={handleButtonTwo}
                  >
                    {currentScreen.buttonTwo}
                  </Button>
                </div>
              </div>
              {
                screenFlag === 'verify' &&
                <div style = {{display: 'flex', justifyContent : 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', width : '340px'}}>
                  <div style={{display: 'flex', flexDirection: 'row', marginTop : 20, alignItems : 'center'}}>
                    <Typography
                        variant="body2"
                        style={{
                          fontWeight: 400,
                          fontSize: 13,
                          color: uiState.darkMode ? 'white' : 'grey',
                          textAlign: 'left'
                        }}
                      >
                        Didn't receive a code? 
                    </Typography>
                    <Button color="secondary" 
                      style={{color: '#009Ef6'}}>Resend</Button>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', alignItems : 'center'}}>
                    <Typography
                      variant="body2"
                      style={{
                        fontWeight: 400,
                        fontSize: 13,
                        color: uiState.darkMode ? 'white' : 'grey',
                        textAlign: 'left'
                      }}
                    >
                      Lost access to your email?
                    </Typography>
                    <Button
                      color="secondary"
                      style={{ color: '#009Ef6',}}
                      onClick={() => history.push('/auth-support')}
                    >
                      Support
                    </Button>
                  </div>
                </div>
                </div>
              }
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ForgetPassword
