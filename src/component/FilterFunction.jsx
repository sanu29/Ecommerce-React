 export function FilterFunction (state,action) 
{
   
       switch(action.type)
    {
        case 'dairy': 
        return {...state, dairy:action.payload ,search:"",  remove:false}
        case 'fruits': 
        return {...state, fruits:action.payload ,search:"", remove:false}
        case 'spices': 
        return {...state, spices:action.payload ,search:"", remove:false}
        case 'dryfruits': 
        return {...state, dryfruits:action.payload ,search:"", remove:false}
        case 'staples': 
        return {...state, staples:action.payload ,search:"", remove:false}
        case 'vegetables': 
        return {...state, vegetables:action.payload ,search:"", remove:false}
        case 'sprouts': 
        return {...state, sprouts:action.payload ,search:"", remove:false}
        case 'nonveg': 
        return {...state, nonveg:action.payload ,search:"", remove:false}
        case 'snacks': 
        return {...state, snacks:action.payload ,search:"", remove:false}
        case 'hightolow':
            return{...state, hightolow:action.payload , lowtohigh:false, remove:false}
        case 'lowtohigh':
            return{...state, lowtohigh:action.payload , hightolow:false, remove:false}
        case 'rating':
                return {...state, rating:action.payload, remove:false}
        case 'search':
            return {...state, search:action.payload, remove:false}
        case 'remove':
            return{ ...state, remove:action.payload, dairy:true, fruits:true, dryfruits:true,spices:true,
                staples:true, vegetables:true, sprouts:true, nonveg:true,snacks:true
            
            }
        default:
            return state
    }
}