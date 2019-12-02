export const createCustomer = (customer) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('customers').add({
            ...customer,
            authorFirstName: 'ruck',
            authorLastName: 'fules',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_CUSTOMER', customer })
        }).catch((err) => {
            dispatch({ type: 'CREATE_CUSTOMER_ERROR', err })
        })
    }
} 
