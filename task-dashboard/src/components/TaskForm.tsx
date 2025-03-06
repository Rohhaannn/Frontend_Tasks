import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTaskStore } from  '../store/taskStore';

const taskSchema = z.object ( {
  title: z.string().min(3, "Title Must be atleast 3 characters"),
  description: z.string().min(10, 'Description must be atleast 10 characters'),
  priority: z.enum(["Low", "Normal", "High"]),
})

type TaskFormValues = z.infer<typeof taskSchema>;

const TaskForm = () => {
  const { addTask } = useTaskStore();
  const { register, handleSubmit, formState: { errors } } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: TaskFormValues) => {
    addTask({...data});
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='p-6 rounded-lg space-x-6'>

      <h2 className='font-bold mb-6 shadow-2xl'> Enter Your Taks Here </h2>

      <input {...register("title")} placeholder='title' className="border border-black p-2 rounded-md"/> 
      {errors.title && <span className='text-red-600'>{errors.title.message}</span>}

      <input {...register("description")} placeholder='description' className="border border-black p-2 rounded-md w-2xl"/> 
      {errors.description && <span className='text-red-600'>{errors.description.message}</span>}

      <select {...register("priority")} className='border border-black p-2 rounded-md'>
        <option value="Low"> Low </option>
        <option value="Normal"> Normal </option>
        <option value="High"> High </option>
      </select>  
      {errors.priority && <span>{errors.priority.message}</span>}

      <button type='submit' className='bg-blue-500 rounded-md px-2 py-2'>
        Add Task
      </button>

    </form>
  )
}

export default TaskForm;