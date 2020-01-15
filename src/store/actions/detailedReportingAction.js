// export const detailedReporting = () => {
//     return (dispatch, getState, {getFirebase, getFirestore}) => {
//         // make async call to database
//         const firestore = getFirestore()
//         const profile = getState().firebase.profile
//         const authorId = getState().firebase.auth.uid

//         firestore.collection('cowDetails').add({
//             ...customer,
//             authorFirstName: profile.firstName,
//             authorLastName: profile.lastName,
//             authorId: authorId,
//             createdAt: new Date()
//         }).then(() => {
//             dispatch({ type: 'CREATE_CUSTOMER', customer })
//         }).catch((err) => {
//             dispatch({ type: 'CREATE_CUSTOMER_ERROR', err })
//         })
//     }
// } 
