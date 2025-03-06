import { ColumnDef, getCoreRowModel, useReactTable , flexRender} from "@tanstack/react-table"
import { useTaskStore } from "../store/taskStore"

type Task = { 
  id: number;
  title: string;
  decription: string;
  priority: string;
}


const TaskTable = () => {
  const {tasks,  removeTask} = useTaskStore();

  const columns : ColumnDef<Task>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "title", header: "Task Title" },
    { accessorKey: "description", header: "Task Description" },
    { accessorKey: "priority", header: "Task Priority" },
    {
      id: "actions",
      header: "Actions",
      cell:({row}) => (
        <button
          className="bg-red-500 text-white px-2  py-1 rounded hover:bg-red-700"
          onClick={() => removeTask(row.original.id)}
        >
          Delete
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data: tasks,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className='font-bold mb-6 shadow-2xl'> Task List </h2>
        <table className="w-full border-collapse border border-gray-300 shadow-2xl">
          
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="bg-gray-200">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="border border-gray-300 p-2">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
          </thead>
          
          <tbody>
            {table.getRowModel().rows.map((row)=>(
              <tr key={row.id} className="hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border border-gray-300 p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  )

}

export default TaskTable;