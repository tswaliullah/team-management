import z from "zod";

const createUserValidationSchema = z.object({
    password: z.string(),
    name: z.string().nonempty("Name is required"),
    email: z.email().nonempty("Email is required")
})


export const UserValidation = {
   createUserValidationSchema
}