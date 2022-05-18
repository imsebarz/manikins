// Here we define the reducer for the user-related actions and state
export default function userReducer (state, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        username: localStorage.getItem('username'),
        // name: localStorage.getItem("name"),
        // email: localStorage.getItem("email"),
        loginError: false
      }
    case 'SIGN_OUT_SUCCESS':
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        id: null,
        username: null,
        loginError: false
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        loginError: action.payload.loginError
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
