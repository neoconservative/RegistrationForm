import {endLoadingAction, startLoadingAction} from "../loadingReducer";
import {setToken} from "../../helpers/token";
import {register} from "../../services/register";

export const registration = (data, setErrorsState) => {
  return dispatch => {
      dispatch(startLoadingAction());
      register(data).then(res =>{
          setToken({token: res.user.token});
          dispatch(endLoadingAction());
          window.location.href='/'
      }).catch(error => {
          dispatch(endLoadingAction());
          console.error(error.response.data);
          setErrorsState(error.response.data)
      })
  }
};