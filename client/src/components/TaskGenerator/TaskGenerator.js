import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import {url} from '../../index'
import {Alert} from '@material-ui/lab'
import './TaskGenerator.css'

export default class TaskGenerator extends React.Component {
    constructor() {
        super()
        this.tasks = [
            'Read and finish a random book in your house',
            'Draw and color your favorite item',
            'Watch any sports game',
            'Get to know your parents',
            'Learn how to play an instrument',
            'Hold a virtual movie night with friends',
            'Make ice cream',
            'Spend time with your family',
            'Finish your work',
            'Learn how to code',
            'Attend a hackathon',
            'Apply for a job if you\'re not already working',
        ]
        this.state = {
            userInput: '',
            taskNum: Math.floor(Math.random() * this.tasks.length)
        }
        this.addTask = this.addTask.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getTasks = this.getTasks.bind(this)
        this.checkInput = this.checkInput.bind(this)
    }
    componentDidMount() {
    }
    handleChange(e) {
        this.setState({userInput: e.target.value})
    }
    checkInput(input_val) {
        if (input_val.value === '') {
            ReactDOM.render(<Alert severity="error" style={{position: 'absolute', width: '100%', padding: 20, bottom: 0}}>Please enter a username!</Alert>, document.getElementById('success-or-error'))
            return false
        }
        return true
    }
    addTask(task) {
        let input_val = document.getElementById('username')
        if (!this.checkInput(input_val)) return
        let id = Math.floor(Math.random() * 1000000)
        let taskDue = new Date()
        axios.post(`${url}/tasks/create`, { 
            todoListId: id,
            dueDate: taskDue.setDate(taskDue.getDate() + 5),
            taskName: task,
            username: input_val.value
        })
            .then(() => alert('Task added!'))
            .catch(err => console.log(err))
        this.getTasks()
    }
    getTasks() {
        let input_val = document.getElementById('username');
        if (!this.checkInput(input_val)) return
        console.log(input_val.value)
        axios.get(`${url}/tasks/username/${input_val.value}`)
            .then(res => {
                ReactDOM.render(res.data.map(task => <h3 key={task.taskName}>{task.taskName}</h3>), document.getElementById('todo-list'))
                
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <div className="TaskGenerator">
                    <div className="task">
                        <h2>{this.tasks[this.state.taskNum]}</h2>
                    </div>
                    <div className="task-actions">
                        <button type="button" onClick={() => this.addTask(this.tasks[this.state.taskNum])}>Add task</button>
                        <button type="button" onClick={() => window.location.reload()}>Regenerate task</button>
                        <button type="button" id="see-tasks" onClick={() => this.getTasks()}>See your tasks!</button>
                        <br></br>
                        <input type="text" id="username" name="username" onChange={(e) => this.handleChange(e)} placeholder="Please input a username to store this task or show your current tasks!" />
                    </div>
                    <div id="todo-list"></div>
                </div>
                <div id="success-or-error"></div>
            </div>
        )
    }
}