import axios from 'axios'
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const registerUser = async (dispatch, data, navigate) => {
  await axios
    .get('http://localhost:3000')
    .then(() => {
      navigate('/login')
    })
    .catch(error => {
      console.error('There is an error: ', error)
    })
}

export const loginUser = async (dispatch, data, navigate) => {
  await axios
    .get('http://localhost:3000')
    .then(() => {
      console.log(data)
      setUserState(dispatch, data)
      navigate('/')
    })
    .catch(error => {
      console.error('There is an error: ', error)
    })
}

export function signOut (dispatch, navigate) {
  localStorage.removeItem('username')
  localStorage.removeItem('email')
  localStorage.removeItem('name')
  dispatch({ type: 'SIGN_OUT_SUCCESS' })
  navigate('/login')
}

export async function joinWaitList (dispatch, data) {
  await axios
    .post(
      'https://inmutable.azurewebsites.net/whitelist/',
      { email: data },
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then((result) => {
      console.log('user has joined the whitelist', result.data)
    })
    .catch(error => {
      console.error('There is an error: ', error)
    })
}

const setUserState = (dispatch, result) => {
  localStorage.setItem('username', result.username)
  // localStorage.setItem("name", result.name);
  // localStorage.setItem("email", result.email);
  dispatch({ type: 'LOGIN_SUCCESS' })
}
