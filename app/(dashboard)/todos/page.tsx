import TodoList from '@/components/TodoList'
import db from '@/utils/db'
import { resolve } from 'path'

const getData = async () => {
  await new Promise((resolve, reject) => setTimeout(() => resolve(resolve), 2000))
  const todos = await db.todo.findMany({})
  console.log(todos)
  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return <TodoList todos={todos} />
}

export default TodosPage
