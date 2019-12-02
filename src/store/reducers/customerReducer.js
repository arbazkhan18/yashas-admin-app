const initState = {
    customersList: [
        { id: '1', name: 'John cena', details: 'from bangalore' },
        { id: '2', name: 'brock lesner', details: 'from chennai' },
        { id: '3', name: 'under taker', details: 'from mumbai' }
    ]
}

const customerReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_CUSTOMER':
            console.log("created customer from reducer", action.customer)
            return state
            case 'CREATE_CUSTOMER_ERROR':
            console.log("create customer error", action.err)
            return state
            default:
            return state
    }
}

export default customerReducer