import TaskList from '../components/taskList'
import TaskFormCustom from '../components/taskFormCustom'
export const dynamic = 'force-dynamic';

const TaskPage = () => {
  return (
    <div className='max-w-lg'>
      <TaskFormCustom></TaskFormCustom>
      <TaskList></TaskList>
    </div>
  )
}

export default TaskPage