// type users=Record<string,{name:string,age:number}>
// const user:users={
//     "number1":{name:"ginny",age:12},
//     "number2":{name:"Hinny",age:21},
// }
type UserDetail={
    name :string,
    age:number
}
const user= new Map<string,UserDetail>();
user.set('number1',{name:'ginny',age:12})
user.set('number2',{name:'Hinny',age:12})
console.log(user.get('number2'));