import React from 'react'
import axios from 'axios'
import {url} from '../../index'
import './Task.css'

export default class Task extends React.Component {
    constructor() {
        super()
        this.removeTask = this.removeTask.bind(this)
    }
    removeTask(task) {
        if (window.confirm('Delete this task?')) {
            axios.delete(`${url}/tasks/delete/${task._id}`)
                .then(() => alert('Task deleted!'))
                .catch(() => alert('Uh oh! The task couldn\'t be deleted.'))
            window.location.reload()
   
        }
    }
    render(){
        var task = this.props.task
        var taskDueDate = new Date(task.dueDate)
        var taskDue = `${taskDueDate.getMonth()+1}/${taskDueDate.getDate()}/${taskDueDate.getFullYear()}`
        return (
            <div className="Task">
                <h3>{task.taskName} by {taskDue}</h3>
                <svg onClick={() => this.removeTask(task)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                <div style={{clear: 'both'}}></div>
            </div>
        )
    }
}