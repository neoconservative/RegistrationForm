import {addOrUpdateUserAction} from "../userReducer";
import {endLoadingAction, startLoadingAction} from "../loadingReducer";
import {addPhone} from "../../services/addPhone";
import {removePhone} from "../../services/removePhone";

export const addUserPhone = (token, data, setErrors) => {
    return dispatch => {
        dispatch(startLoadingAction());
        addPhone(token, data).then(res =>{
            dispatch(addOrUpdateUserAction(res.user));
            dispatch(endLoadingAction())
        }).catch(error => {
            console.error(error.response.data);
            setErrors(error.response.data);
            dispatch(endLoadingAction())
        })
    }
};

export const removeUserPhone = (token, setPhone) => {
    return dispatch => {
        dispatch(startLoadingAction());
        removePhone(token).then(res =>{
            setPhone('');
            dispatch(addOrUpdateUserAction(res.user));
            dispatch(endLoadingAction())
        }).catch(error => {
            console.error(error.response.data);
            dispatch(endLoadingAction())
        })
    }
};