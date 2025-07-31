import { useRecoilValue } from 'recoil';
import { todoState } from '../recoil/atoms';
import TodoItem from './TodoItem';

export default function TodoList({ filterCompleted = false }) {
  const todos = useRecoilValue(todoState);
  const filtered = filterCompleted ? todos.filter(t => t.completed) : todos;

  return (
    <div>
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No tasks here!</p>
      ) : (
        filtered.map(todo => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}