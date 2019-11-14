import React, {Component, Fragment} from 'react';
import nanoid from 'nanoid';
import AddTaskForm from "./Components/AddTaskForm/AddTaskForm";
import Task from "./Components/Task/Task";
import './App.css';

class App extends Component {
  state = {
    tasks: [
      {text:'Buy milk', id: nanoid()},
      {text:'Walk with dog', id: nanoid()},
      {text:'Do homework', id: nanoid()},
    ],
    currentText: 'Add_new_task'
  };

  changeText = (event) => {
      const currentText = event.target.value;
      this.setState({currentText});
  };

  addTask = () => {
      let thisText = {text: this.state.currentText, id: nanoid()};
      const tasks = [...this.state.tasks];
      tasks.push(thisText);

      if (this.state.currentText === 'Add_new_task'){
          alert('Write something');
      } else {
          this.setState({tasks});
      }
  };

  removeTask = id => {
      const index = this.state.tasks.findIndex(t => t.id === id);
      const tasks = [...this.state.tasks];
      tasks.splice(index, 1);
      this.setState({tasks});
  };

  render() {
    return(
        <div className='App'>
          <AddTaskForm
              currentText={this.state.currentText}
              onChange={this.changeText}
              plusTask={this.addTask}
          />
          <Fragment>
            {this.state.tasks.map(task => (
                <Task
                    key={task.id}
                    text={task.text}
                    removeTask={() => this.removeTask(task.id)}
                />
            ))}
          </Fragment>
        </div>
    )
  }
}

export default App;