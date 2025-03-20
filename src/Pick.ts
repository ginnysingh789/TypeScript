interface User
{
    id:string
    name:string
    age:number
    password:number
}
type updateUser=Pick<User,"name"|"age">
type partialUpdate=Partial<updateUser>
const afterUpdate:partialUpdate={
    name:'ginny',

}