import { Component } from 'react';
import './App.css';

const Todo = props => (
  <div className="todo">
    <h2 style={{color: "black"}}>
      {props.title}
    </h2>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      text: ""
    }
  }
  addTodo() {
    if (this.state.text.trim() === "") return;
    const todos = this.state.todos.slice();
    todos.push(this.state.text);
    this.setState({todos: todos, text: ""});
  }
  render() {
    return (
      <div className="App">
        <h1 id="title">ToDo!</h1>
        <div id="new-todo">
          <h3>Create a new todo:</h3>
          <input
            id="input-box"
            value={this.state.text}
            placeholder="Put the title here..."
            onChange={t => this.setState({text: t.target.value})}
          />
          <button onClick={() => this.addTodo()}>Add</button>
        </div>
        <div>
          {this.state.todos.map((todo, i) => (
            <Todo
              title={todo}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
