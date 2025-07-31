import { Check, Trash } from 'lucide-react';
import { useRecoilState } from 'recoil';
import { todoState } from '../recoil/atoms';
import { toast } from 'react-toastify';

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoState);

  const toggleComplete = () => {
    const updated = todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updated);
  };

  const removeTodo = () => {
    const updated = todos.filter((t) => t.id !== todo.id);
    setTodos(updated);
    toast.info('Task removed');
  };

  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-start mb-4">
      <div className="flex-1">
        <h3 className={` font-bold ${todo.completed ? 'line-through' : ''}`} >{todo.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: todo.description }} className="text-sm mt-1 text-blue-600" />
      </div>
      <div className="flex gap-2">
        <button onClick={toggleComplete} title="Mark as done" className="text-green-500">
          <Check />
        </button>
        <button onClick={removeTodo} title="Delete" className="text-red-500">
          <Trash />
        </button>
      </div>
    </div>
  );
}