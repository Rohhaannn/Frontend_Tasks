import {create} from 'zustand';

type Task = {
  id:number;
  title: string;
  decription: string;
  priority: "Low" | "Normal" | "High";
};

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void
  removeTask: (id: number) => void;
};

export const useTaskStore = create<TaskStore>((set)=>({
  tasks:[],
  addTask: (task) => set((state) => ({tasks: [...state.tasks, {...task, id: state.tasks.length + 1}] })),
  removeTask: (id) => set((state) => ({tasks: state.tasks.filter((task) => task.id != id) }))
}));

