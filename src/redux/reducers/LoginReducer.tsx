import {
  LoginAction,
  CLOSE,
  SUBMIT,
  REGISTER,
  initialState,
} from "../../types/Login";

const LoginReducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
    case CLOSE:
      return false;
    case SUBMIT:
      return false;
    case REGISTER:
      return true;
    default:
      return state;
  }
};
export default LoginReducer;
