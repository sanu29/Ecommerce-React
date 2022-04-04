const dairyFilter = (prod)=> prod.filter((p)=>p.categoryName === 'dairy')
const staplesFilter = (prod)=> prod.filter((p)=>p.categoryName === 'staples') 
const vegetablesFilter = (prod)=> prod.filter((p)=>p.categoryName === 'vegetables') 
const fruitsFilter = (prod)=> prod.filter((p)=>p.categoryName === 'fruits') 
const snacksFilter = (prod)=> prod.filter((p)=>p.categoryName === 'snacks') 
const sproutsFilter = (prod)=> prod.filter((p)=>p.categoryName === 'sprouts') 
const dryfruitsFilter = (prod)=> prod.filter((p)=>p.categoryName === 'dryfruits') 
const nonvegFilter = (prod)=> prod.filter((p)=>p.categoryName === 'nonveg') 
const spicesFilter = (prod)=> prod.filter((p)=>p.categoryName === 'spices') 


export function FilterCategory(list, products) {
    let filteredprods = [];
    if (list.dairy === true) {
        let res = dairyFilter(products);
        filteredprods = [...filteredprods, ...res];
    }
    if (list.staples === true) {
        let res = staplesFilter(products);
        filteredprods = [...filteredprods, ...res];
    }
    if (list.vegetables === true) {
        let res = vegetablesFilter(products);
        filteredprods = [...filteredprods, ...res];
    }
    if (list.fruits === true) {
        let res = fruitsFilter(products);
        filteredprods = [...filteredprods, ...res];
    }
    if (list.dryfruits === true) {
        let res = dryfruitsFilter(products);
        filteredprods = [...filteredprods, ...res];
    }
    if (list.snacks === true) {
        let res = snacksFilter(products);
        filteredprods = [...filteredprods, ...res];
    }
    if (list.sprouts === true) {
        let res = sproutsFilter(products);
        filteredprods = [...filteredprods, ...res];
    }
    if (list.nonveg === true) {
        let res = nonvegFilter(products);
        filteredprods = [...filteredprods, ...res];
    }
    if (list.spices === true) {
        let res = spicesFilter(products);
        filteredprods = [...filteredprods, ...res];
    }
    if(list.lowtohigh === true)
    {
        filteredprods = filteredprods.sort((a,b)=>{
            return a.price - b.price
        })
        console.log(filteredprods)

    }
    if(list.hightolow === true)
    {
        filteredprods = filteredprods.sort((a,b)=>{
          return a.price -b.price
        })
        filteredprods =filteredprods.reverse()
    }
    return filteredprods;

}
