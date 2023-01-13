export const initialState = {
    shariot :[],
};


const reducer = (state, action) =>
{
    console.log(action);
    switch (action.type)
    {
        case "ADD_TO_SHARIOT":
            return {

                ...state,
                shariot: [...state.shariot, action.item],
            };
            default:
                    return state;
    }
};

export default reducer;