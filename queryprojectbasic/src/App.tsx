import { useQuery } from '@tanstack/react-query';
import { fetchUsers, User } from './api';
import './App.css'

function App() {

  const {data, error, isLoading} = useQuery<User[]> ({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p> Loading...</p>
  if (error) return <p> Error Loading Users!</p>


  return (
    <>
      <div>
        <h1 className='text-3xl mb-4 font-bold'>User List</h1>
        <ul>
          {data?.map((user) => (
            <div className='mb-5'>
              <li key={user.id}>
                Name: {user.name} - <br /> Email: <span className="text-blue-500 mb-5">  {user.email} </span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
