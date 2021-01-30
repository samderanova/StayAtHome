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
    }
    componentDidMount() {
    }
    handleChange(e) {
        this.setState({userInput: e.target.value})
    }
    addTask(task) {
        let input_val = document.getElementById('username');
        if (input_val.value === '') {
            ReactDOM.render(<Alert severity="error" style={{position: 'absolute', width: '100%', padding: 20, bottom: 0}}>Please enter a username!</Alert>, document.getElementById('success-or-error'))
            return
        }
        let id = Math.floor(Math.random() * 1000000)
        let taskDue = new Date()
        axios.post(`${url}/tasks/create`, { 
            todoListId: id,
            dueDate: taskDue.setDate(taskDue.getDate() + 5),
            taskName: task,
            username: `user${id}`
        })
            .then(() => ReactDOM.render(<Alert severity="success" style={{position: 'absolute', width: '100%', padding: 20, bottom: 0}}>Task added!</Alert>, document.getElementById('success-or-error')))
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
                        <br></br>
                        <input type="text" id="username" name="username" onChange={(e) => this.handleChange(e)} placeholder="Please input a username to store your tasks!" />
                    </div>
                </div>
                <div id="success-or-error"></div>
            </div>
        )
    }
}