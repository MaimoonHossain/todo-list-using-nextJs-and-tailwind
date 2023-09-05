import NewTodoForm from '@/components/NewTodoForm'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <h2>{children}</h2>
    </div>
  )
}

export default DashboardLayout
