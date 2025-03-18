//Taking list of user
interface User{
    name:string
    age:number
}
function LegalUser(users:User[])
{
    for(let i=0;i<users.length;i++)
    {
        if(users[i].age>18)
        {
            console.log(users[i].name)
        }
    }
}
let usersList:User[]=[
    {name:'ginny',age:32},{name:'Hazma',age:32},{name:'hajs',age:12}
]
LegalUser(usersList)