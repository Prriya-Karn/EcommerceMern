const {z} = require('zod');

const regisSchema = z.object({
username : z
    .string({required_error : "Name is required"})
    .trim()
    .min(3,{message : "Name must be at least of 3 character"})
    .max(255,{message:"Name must not be more 255 character"}),

    email : z
    .string({required_error:"email is required"})
    .trim()
    .email({message : "invalid email address"})
    .min(3,{message : "email must be at least of 3 character"})
    .max(255,{message:"email must not be more 255 character"}),
    

    phone : z
    .string({required_error : "phone number is required"})
    .min(10,{message : "Phone number must be at least of 10 character"})
    .max(20,{message:"Phone number must not be more 20 character"})
    .regex(/^[0-9]+$/,{ message: "Phone number must contain only digits" }),

    password : z
    .string({required_error:"password is required"})
    .min(7,{message : "Password must be at least of 7 character"})
    .max(20,{message:"Password must not be more 20 character"}),
})

const loginSchema = z.object({
     email : z
    .string({required_error:"email is required"})
    .trim()
    .email({message : "invalid email address"})
    .min(3,{message : "email must be at least of 3 character"})
    .max(255,{message:"email must not be more 255 character"}),
    
    password : z
    .string({required_error:"password is required"})
    .min(7,{message : "Password must be at least of 7 character"})
    .max(20,{message:"Password must not be more 20 character"}),
})


const ContactSchema = z.object({
    username : z
        .string({required_error : "Name is required"})
        .trim()
        .min(3,{message : "Name must be at least of 3 character"})
        .max(255,{message:"Name must not be more 255 character"}),
    
        email : z
        .string({required_error:"email is required"})
        .trim()
        .email({message : "invalid email address"})
        .min(3,{message : "email must be at least of 3 character"})
        .max(255,{message:"email must not be more 255 character"}),

        message : z
        .string({required_error : "Message is required"})
        .trim()
        .min(5,{message : "Message must be at least of 5 character"})
        .max(255,{message:"Message must not be more 255 character"}),
    })

    const reviewZodSchema = z.object({
        reviewMessage : z
        .string({required_error : "message is required"})
        .trim(),

        name : z
        .string({required_error : "Name is required"})
        .trim()
        .min(3,{message : "Name must be at least of 3 character"})
        .max(255,{message:"Name must not be more 255 character"}),

        email : z
        .string({required_error:"email is required"})
        .trim()
        .email({message : "invalid email address"})
        .min(3,{message : "email must be at least of 3 character"})
        .max(255,{message:"email must not be more 255 character"}),
    })
   

module.exports = {regisSchema,loginSchema,ContactSchema,reviewZodSchema};


