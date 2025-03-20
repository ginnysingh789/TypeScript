import z from 'zod';
import express from 'express';
const app=express();
const scheme=z.object({
    name:z.string().min(1),
    age:z.number().min(3)
})
//Now i have  create inference because sometime i have to use in the frontend
//For example you created a form and you want  user send only valid input ,you use
// zod scheme in the frontend as the check
type finalScheme=z.infer<typeof scheme >

//Now you can use this typesafety scheme in the routes as well as in the frontend