import {addOrUpdateUserAction} from "../userReducer";
import {endLoadingAction, startLoadingAction} from "../loadingReducer";
import {login} from "../../services/login";
import {setToken} from "../../helpers/token";

export const logIn = (data, setErrors) => {
  return dispatch => {
      dispatch(startLoadingAction());
      login(data).then(res =>{
          setToken({token: res.token});
          dispatch(endLoadingAction());
          window.location.href='/'
      }).catch(error => {
          dispatch(endLoadingAction());
          console.error(error.response.data);
          setErrors(error.response.data)
      })
  }
};