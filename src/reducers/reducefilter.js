export const reducefilter=(state,action)=>
{
    switch (action.type)
    {
        case "PRICE":
            return{
                 ...state,
                newprice:action.payload
            }

        case "DISCOUNT":
            return{
                ...state,
                discount:action.payload
            }

        case "RATING":
            return{
                ...state,
                rating:action.payload
            }
        case "Result":
            return{
                ...state,
                result:action.payload
            }
            default:
                return state

    }
   

}