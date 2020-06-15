const reducer = (state = {
    mobileData: null,
    err: false,
    loading: false,
}, action) => {
    switch (action.type) {
        case "GET_PAGE_LIST_REQUEST":
            return { ...state, loading: true, err: false };
        case "GET_PAGE_LIST_DATA":
            return {
                ...state,
                mobileData: action.data,
                loading: false,
            }
        case "GET_PAGE_LIST_ERR":
            return { ...state, err: true, loading: false }
        default:
            return state;
    }
};
export default reducer;
