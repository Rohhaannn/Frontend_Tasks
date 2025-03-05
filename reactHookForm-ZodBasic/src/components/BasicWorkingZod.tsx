import {z, ZodType} from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const BasicWorkingZod = () => {

  type FormData = {
    firstName : string;
    lastName: string;
    email: string;
    age: number;
    password: string;
    confirmPassword: string;
  }

  const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(20),
    email: z.string().email(),
    age: z.number().min(18).max(70),
    password: z.string().min(5).max(10),
    confirmPassword: z.string().min(5).max(10),

  }).refine((data) => data.password === data.confirmPassword, {
      message: "Password does not match",
      path: ["confirmPassword"],
  });

  const { register, handleSubmit, formState:{ errors }, } = useForm<FormData>({ resolver: zodResolver(schema)});

  const submitData = (data: FormData) => {
    console.log("It worked", data);
  }

  return (
    <>
      <div className='App'>
      
        <div className='form'>
          
          <form onSubmit={handleSubmit(submitData)} >
            <label htmlFor=""> First name : </label>
            <input type="text" {...register("firstName")} />
            {errors.firstName && (
              <span> {errors.firstName.message}</span>
            )}

            <br />

            <label htmlFor=""> Last name : </label>
            <input type="text" {...register("lastName")}/>
            {errors.firstName && (<span> {errors.lastName?.message}</span>)}

            <br />

            <label htmlFor=""> Email : </label>
            <input type="email" {...register("email")}/>
            {errors.email && (
              <span> {errors.email.message}</span>
            )}

            <br />

            <label htmlFor=""> Age : </label>
            <input type="number"  {...register("age",{valueAsNumber: true})}/>
            {errors.age && (<span> {errors.age.message}</span>)}

            <br />

            <label htmlFor=""> Password : </label>
            <input type="password" {...register("password")}/>
            {errors.password && (<span>{errors.password.message}</span>)}

            <br />

            <label htmlFor=""> Confirm Password : </label>
            <input type="password" {...register("confirmPassword")}/>
            {
              errors.confirmPassword && (
                <span> {errors.confirmPassword.message} </span>
              )
            }
            
            <br />
            <br />
            <input type="submit" />
          </form> 

        </div>
      </div>
    </>
  )
}

export default BasicWorkingZod
