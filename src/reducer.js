export const initialState = {
    shario :[],
};


const reducer = (state, action) =>
{
    switch (action.type)
    {
        case "ADD_to_shariot":
            return {

                ...state,
                shario: [...state.basket, action.item],
            };
            default:
                    return state;
    }
};

export default reducer;