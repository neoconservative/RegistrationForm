const defaultState = {
    isLoading: false
};

const LOADING ='LOADING';
const NO_LOADING ='NO_LOADING';

export const loadingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, isLoading: true};
        case NO_LOADING:
            return {...state, isLoading: false};
        default:
            return state
    }
};

export const startLoadingAction = () => ({type: LOADING});
export const endLoadingAction = () => ({type: NO_LOADING});