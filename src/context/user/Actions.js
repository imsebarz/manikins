import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem('token')}` }


export const registerUser = async (dispatch, data, navigate) => {
  await axios
    .get('/register')
    .then(() => {
      navigate('/login')
    })
    .catch(error => {
      console.error('There is an error: ', error)
    })
}

export const loginUser = async (dispatch, data,) => {
  await axios
    .post('/logintoken', data)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
    })
    .catch(error => {
      console.error('There is an error: ', error)
    })
}

export const getAllItems = async () => {
  await axios
    .get('/items')
    .then((res) => {
      console.log(res.data)
    })
    .catch(error => {
      console.error('There is an error: ', error)
    })
}



export function signOut(dispatch, navigate) {
  localStorage.removeItem('username')
  localStorage.removeItem('email')
  localStorage.removeItem('name')
  dispatch({ type: 'SIGN_OUT_SUCCESS' })
  navigate('/login')
}

export async function joinWaitList(dispatch, data) {
  await axios
    .post(
      '/whitelist',
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

export const setUserState = (dispatch, result) => {
  localStorage.setItem('username', result.username)
  // localStorage.setItem("name", result.name);
  // localStorage.setItem("email", result.email);
  dispatch({ type: 'LOGIN_SUCCESS' })
}
