import {z} from 'zod';

const formSchema = z.union([
  z.object({
    type: z.literal("login"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
  z.object({
    type: z.literal("signup"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
  }).refine((data)=> data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  })
])

export { formSchema }
export type FormType = z.infer<typeof formSchema>