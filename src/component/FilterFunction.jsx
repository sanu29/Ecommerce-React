 export function FilterFunction (state,action) 
{
   
       switch(action.type)
    {
        case 'dairy': 
        return {...state, dairy:action.payload ,search:""}
        case 'fruits': 
        return {...state, fruits:action.payload ,search:""}
        case 'spices': 
        return {...state, spices:action.payload ,search:""}
        case 'dryfruits': 
        return {...state, dryfruits:action.payload ,search:""}
        case 'staples': 
        return {...state, staples:action.payload ,search:""}
        case 'vegetables': 
        return {...state, vegetables:action.payload ,search:""}
        case 'sprouts': 
        return {...state, sprouts:action.payload ,search:""}
        case 'nonveg': 
        return {...state, nonveg:action.payload ,search:""}
        case 'snacks': 
        return {...state, snacks:action.payload ,search:""}
        case 'hightolow':
            return{...state, hightolow:action.payload , lowtohigh:false}
        case 'lowtohigh':
            return{...state, lowtohigh:action.payload , hightolow:false}
        case 'rating':
                return {...state, rating:action.payload}
        case 'search':
            return {...state, search:action.payload}
        default:
            return state
    }
}