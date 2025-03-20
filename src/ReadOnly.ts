//Readonly 
interface UserReadOnly
{
    name:string
    age:number
}
const userread1:Readonly<UserReadOnly>={
    name:'ginny',
    age:23
}
// userread1.name='Hinny' it start giving an error 