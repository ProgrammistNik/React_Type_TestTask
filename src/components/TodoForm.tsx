import { useState } from 'react'
import type { FormEvent } from 'react'

type TodoFormProps = {
  onAdd: (title: string) => boolean
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (onAdd(title)) {
      setTitle('')
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Новая задача"
        aria-label="Текст задачи"
      />
      <button className="todo-button" type="submit">
        Добавить
      </button>
    </form>
  )
}
