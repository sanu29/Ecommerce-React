 export function FilterFunction (state,action) 
{
    console.log("indispatch")
       switch(action.type)
    {
        case 'dairy': 
        return {...state, dairy:action.payload}
        case 'fruits': 
        return {...state, fruits:action.payload}
        case 'spices': 
        return {...state, spices:action.payload}
        case 'dryfruits': 
        return {...state, dryfruits:action.payload}
        case 'staples': 
        return {...state, staples:action.payload}
        case 'vegetables': 
        return {...state, vegetables:action.payload}
        case 'sprouts': 
        return {...state, sprouts:action.payload}
        case 'nonveg': 
        return {...state, nonveg:action.payload}
        case 'snacks': 
        return {...state, snacks:action.payload}
        case 'hightolow':
            return{...state, hightolow:action.payload , lowtohigh:false}
        case 'lowtohigh':
            return{...state, lowtohigh:action.payload , hightolow:false}
        default:
            return state
    }
}