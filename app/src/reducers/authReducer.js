import { LOGIN, LOGOUT } from '../actions/types';

const initalState = {
    isSignedIn: null,
    userId: null,
    firstName: '',
    lastName: '',
    email: '',
    password: ''

};

export default (state = { initalState }, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload,
                firstName: action.payload,
                lastName: action.payload,
                email: action.payload,
                password: action.payload
            };
        case LOGOUT:
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};

// import { SIGN_IN, SIGN_OUT } from '../actions/types';

// const initalState = {
//     isSignedIn: null,
//     userId: null
// };

// export default (state = { initalState }, action) => {
//     switch (action.type) {
//         case SIGN_IN:
//             return { ...state, isSignedIn: true, userId: action.payload };
//         case SIGN_OUT:
//             return { ...state, isSignedIn: false, userId: null };
//         default:
//             return state;
//     }
// };