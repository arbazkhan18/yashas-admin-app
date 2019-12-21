import customerReducer from './customerReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    customer: customerReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer