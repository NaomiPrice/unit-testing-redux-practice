const nameReducer = (state = [], action) => {
    if (action.type === 'ADD_NAME') {
        return [...state, action.payload];
    } else if (action.type === 'CLEAR_ALL_NAMES') {
        return [];
    }
    return state;
};

// The store only accepts one reducer
export default nameReducer;