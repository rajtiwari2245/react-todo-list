import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ToastContainer } from 'react-toastify';


export default function Home() {
  return (
    <div>
      <TodoForm />
      <TodoList />
      <ToastContainer />
    </div>
  );
}