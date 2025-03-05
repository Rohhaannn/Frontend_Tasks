import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormType } from "./validation";

interface FormProps {
  formType: "login" | "signup";
}

const Form: React.FC<FormProps> = ({ formType }) => {
  const {register,handleSubmit,formState: { errors },} = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: { type: formType },
  });

  const onSubmit = (data: FormType) => console.log("Submitted Data:", data);

  return (
    <div >
      <h2 >{formType.toUpperCase()} FORM</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField label="Email" type="email" {...register("email")} error={errors.email?.message} />
        <InputField label="Password" type="password" {...register("password")} error={errors.password?.message} />
        {formType === "signup" && (
          <InputField label="Confirm Password" type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const InputField = ({ label, error, ...props }: { label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label >{label}</label>
    <input {...props} />
    {error && <p>{error}</p>}
  </div>
);

export default Form;
