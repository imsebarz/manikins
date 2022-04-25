import axios from "axios";
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const registerUser = async (dispatch, data) => {
    await axios
        .post(`/register`, data)
        .then(() => {
            setUserState(dispatch, data);
            history.push("/");
        })
        .catch(error => {
            console.error('There is an error: ', error)
        });
};


const setUserState = (dispatch, result) => {
    localStorage.setItem("iduser", result.idUser);
    localStorage.setItem("username", result.username);
    localStorage.setItem("firstname", result.firstName);
    localStorage.setItem("middlename", result.middleName);
    localStorage.setItem("lastname", result.lastName);
    localStorage.setItem("email", result.email);
    dispatch({ type: "LOGIN_SUCCESS" });
}

export function signOut(dispatch, history) {
    localStorage.removeItem("username");
    localStorage.removeItem("user_id");
    localStorage.removeItem("email");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.setItem("first_login", 0);
    dispatch({ type: "SIGN_OUT_SUCCESS" });
    history.push("/login");
}
