let arr = ['hello', 42, true, undefined, Symbol(), 10n];

console.log('the array', arr);
console.log('the array and the types that JS returns');
console.log('');

for( let element of arr ){
    console.log(element, '->' ,typeof element);
}
console.log('');

// now weirdness begins

let weirdos = [null, [], function (){}, NaN]

console.log('weirdos', weirdos)
console.log('types of these weirdos as follows')
console.log('')

for( let weird of weirdos){
    console.log(weird,'->', typeof weird)
}
console.log('')

// some special cases and how to properly identify weirdos
// 1. null -> value === null
// 2. [] => Array.isArray([])
// 3. NaN => Number.isNaN(NaN)

console.log('null is null:', weirdos[0] === null)
console.log('[] is array:', Array.isArray(weirdos[1]))
console.log('NaN is NaN:', Number.isNaN(weirdos[3]))