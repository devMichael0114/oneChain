import { useState, useContext } from 'react'
import axios from 'axios'
import { UIContext } from '../../../App'
// import { useHistory } from 'react-router-dom'
// import { fetchCurrentUser } from '../../../services/AuthService'

const url = process.env.REACT_APP_ENDPOINT

const useSignupUser = () => {
  const { uiDispatch } = useContext(UIContext)
  // const { userDispatch } = useContext(UserContext)

  // const history = useHistory()

  const [loadingSign, setLoadingSign] = useState(false)
  const [errorSign, setErrorSign] = useState(null)
  const [initialState, setInitialState] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPW: '',
  })
  const handleNameChange = (e) => {
    setErrorSign({ ...errorSign, name: '' })
    setInitialState({ ...initialState, name: e.target.value })
  }

  const handleLastNameChange = (e) => {
    setErrorSign({ ...errorSign, lastname: '' })
    setInitialState({ ...initialState, lastname: e.target.value })
  }

  const handleSignEmailChange = (e) => {
    setErrorSign({ ...errorSign, email: '' })
    setInitialState({ ...initialState, email: e.target.value })
  }

  const handleSignPasswordChange = (e) => {
    setInitialState({ ...initialState, password: e.target.value })
    setErrorSign({ ...errorSign, password: '' })
  }

  const handleConfirmPasswordChange = (e) => {
    setInitialState({ ...initialState, confirmPW: e.target.value })
    setErrorSign({ ...errorSign, confirmPW: '' })
  }

  async function handleSignupUser(e) {
    e.preventDefault()

    setLoadingSign(true)
    try {
      const { data } = await axios.post(`${url}/api/auth/signup`, initialState)
      console.log(data)
      //const { data } = await axios.post(`http://localhost:5000/api/auth/signup`, initialState)
      // localStorage.setItem('token', JSON.stringify(data.data.token))
      // const me = await fetchCurrentUser()
      setLoadingSign(false)

      // userDispatch({ type: 'SET_CURRENT_USER', payload: me.data.user })
      
      // uiDispatch({
      //   type: 'SET_MESSAGE',
      //   payload: { color: 'success', display: true, text: data.message },
      // })

      //history.push('/home')
    } catch (err) {
      setLoadingSign(false)

      console.log(err)
      if (err && err.response) {
        if (err.response.status === 422) {
          setErrorSign({ ...err.response.data.error })
        }

        if (err.response.status === 400) {
          uiDispatch({
            type: 'SET_MESSAGE',
            payload: {
              color: 'error',
              display: true,
              text: err.response.data.error,
            },
          })
        }
      }
    }
  }

  return {
    loadingSign,
    errorSign,
    handleSignupUser,
    handleNameChange,
    handleLastNameChange,
    handleSignEmailChange,
    handleSignPasswordChange,
    handleConfirmPasswordChange,
  }
}

export default useSignupUser
