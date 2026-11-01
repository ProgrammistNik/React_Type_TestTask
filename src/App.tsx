import { TodoFilter } from './components/TodoFilter'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { useTodos } from './hooks/useTodos'
import './App.css'

function App() {
  const {
    todos,
    visibleTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos()

  const activeCount = todos.filter((todo) => !todo.completed).length

  return (
    <main className="app">
      <section className="card">
        <header className="card-header">
          <h1>Список задач</h1>
          <p>Активных: {activeCount}</p>
        </header>

        <TodoForm onAdd={addTodo} />
        <TodoFilter value={filter} onChange={setFilter} />
        <TodoList
          todos={visibleTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </section>
    </main>
  )
}

export default App
