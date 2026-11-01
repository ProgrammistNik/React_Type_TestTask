import type { TodoFilter as Filter } from '../types'

type TodoFilterProps = {
  value: Filter
  onChange: (value: Filter) => void
}

const OPTIONS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Выполненные' },
]

export function TodoFilter({ value, onChange }: TodoFilterProps) {
  return (
    <div className="todo-filters" role="group" aria-label="Фильтр задач">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className={
            value === option.value
              ? 'filter-button filter-button-active'
              : 'filter-button'
          }
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
