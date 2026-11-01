import type { Todo } from '../types'

type TodoItemProps = {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={todo.completed ? 'todo-item todo-item-completed' : 'todo-item'}>
      <label className="todo-item-main">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.title}</span>
      </label>
      <button
        className="todo-delete"
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Удалить задачу ${todo.title}`}
      >
        Удалить
      </button>
    </li>
  )
}
