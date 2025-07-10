let arr = ['hello', 42, true, undefined, Symbol(), 10n]

console.log('the array', arr);
console.log('the array and the types that JS returns')
console.log('')

for( elements of arr ){
    console.log(elements, '->' ,typeof elements)
}
console.log('')
// now weirdness begins

let weirdos = [null, [], function (){}, NaN]

console.log('weridos', weirdos)
console.log('types of these weirdos as follows')
console.log('')

for(weird of weirdos){
    console.log(weird,'->', typeof weird)
}
console.log('')

// some special cases and how to properly identify weirdos
// 1. null -> value === null
// 2. [] => Array.isArray([])
// 3. NaN => Number.isNaN(NaN)