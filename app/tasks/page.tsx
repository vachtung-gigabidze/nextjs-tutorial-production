import React from 'react'
import TaskList from '../components/taskList'
import DeleteForm from '../components/deleteForm'
import TaskFormCustom from '../components/taskFormCustom'

const TaskPage = () => {
  return (
    <div className='max-w-lg'>
      <TaskFormCustom></TaskFormCustom>
      <TaskList></TaskList>
    </div>
  )
}

export default TaskPage