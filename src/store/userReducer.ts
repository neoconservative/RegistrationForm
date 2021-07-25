const defaultState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    }
};

const ADD_AND_UPDATE_USER = 'ADD_AND_UPDATE_USER';

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_AND_UPDATE_USER:
            return {...state, user: action.payload};
        default:
            return state
    }
};

export const addOrUpdateUserAction = (payload) => ({type: ADD_AND_UPDATE_USER, payload});