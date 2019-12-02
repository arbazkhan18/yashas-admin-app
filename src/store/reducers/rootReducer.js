import customerReducer from './customerReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore' 

const rootReducer = combineReducers({
    auth: authReducer,
    customer: customerReducer,
    firestore: firestoreReducer
})

export default rootReducer