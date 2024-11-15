const initialstate={
    cart:[]
}

export const cartreducer=(state=initialstate,action)=>{
    switch(action.type){
        case "AddToCart":
            console.log(state.cart)
            return{
                ...state,
                cart:[...state.cart,action.payload]
            }
        case "RemoveToCart":
           return{ 
            ...state,
            cart:state.cart.filter(product=>product.key!=action.payload)
        }
        default:
            return state
    }


}