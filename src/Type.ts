interface UserName
{
    name:string
    age:number
}
const sum=(user1:UserName,user2:UserName)=>{
    return user1.age+user2.age
}
let user1:UserName={
    name:'Ginny',
    age:12
}
let user2:UserName={
    name:'Ginny',
    age:12
}
const result:number=sum(user1,user2)
console.log(result)