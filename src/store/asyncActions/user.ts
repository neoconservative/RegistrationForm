import {getUser} from "../../services/user";
import {addOrUpdateUserAction} from "../userReducer";
import {endLoadingAction, startLoadingAction} from "../loadingReducer";

export const getUserProfile = (token) => {
  return dispatch => {
      dispatch(startLoadingAction());
      getUser(token).then(user =>{
          dispatch(addOrUpdateUserAction(user));
          dispatch(endLoadingAction())
      }).catch(error => {
          dispatch(endLoadingAction())
      })
  }
};