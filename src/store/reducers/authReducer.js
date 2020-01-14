const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log("login error");
      return {
        ...state,
        authError: "Login failed18"
      };
    case 'LOGIN_SUCCESS':
      console.log("login success");
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log("signout success from reducer");
      return state;
    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return{
        ...state,
        authErr: null
      }
      case 'SIGNUP_ERROR':
        console.log('signup error')
        return{
          ...state,
          authErr: action.err.message
        }
    default:
      return state;
  }
};

export default authReducer;
