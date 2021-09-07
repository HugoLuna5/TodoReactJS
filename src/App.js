//import logo from './logo.svg';
//import './App.css';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearh } from './TodoSearh';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  {
    text: 'Cortar cebolla',
    completed: true,
  },
  {
    text: 'Tomar curso de react',
    completed: false,
  },
  {
    text: 'GG',
    completed: false,
  },
];

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearh />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
