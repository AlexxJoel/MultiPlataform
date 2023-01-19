//const genera un objeto/constante
//var y let generan una variable
//scope = fragmento de código
//let y const son variables dependientes del scope, mientras que var solo se puede usar una vez.

//array
const roles = [1,2,3]

//arrayList
const roles2 = [{}]

//lista
const roles3 ={}

//pushm splice, indexOf, find, filter, map, foreach

roles.forEach(element=>{
    console.log(element.name);
})

//desestructuración de objetos

const person2={
    name: 'Mike',
    age: 20,
    address:{
        street: 'Ahuehuetitla',
        number: 3,
    }
}

console.log(person2.name);
console.log(person2.address.street);

const {name,address:{street}}=person2
console.log(street);