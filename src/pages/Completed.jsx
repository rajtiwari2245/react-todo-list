import TodoList from '../components/TodoList';

export default function Completed() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 ">Completed Tasks</h2>
      <TodoList filterCompleted />
    </div>
  );
}