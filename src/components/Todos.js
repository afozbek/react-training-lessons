import React from "react";

class Todos extends React.Component {
  state = {
    todos: [],
    value: ""
  };

  handleValueChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmitTodo = e => {
    let prevTodos = [
      ...this.state.todos
    ]; /* Veriler immutable'dır (değiştirelemez) */
    this.setState({
      todos: [...prevTodos, this.state.value] /* Push işlemine eşdeğerdir */
    });
  };

  handleDeleteTodo = id => {
    let filteredTodos = this.state.todos.filter(
      (_, index) => index !== id
    ); /* Her zaman kopya array döndürür ('===' tür olarak da kontrol eder) */

    this.setState({
      // 'Todo' verilerini güncelleme
      todos: filteredTodos
    });
  };

  render() {
    // Ekrana basılacak kısmı döndürür
    console.log(this.props.isTodo);
    const myTodos = (
      <ul>
        {this.state.todos.map((todo, index) => (
          <li key={index} onClick={() => this.handleDeleteTodo(index)}>
            {" "}
            {/* Her li için özel key verisi tanımlamamız lazım. Aksi halde uyarı verir */}
            {todo}
          </li>
        ))}
      </ul>
    );
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
        />
        <button onClick={this.handleSubmitTodo}>Submit Todo</button>
        {myTodos}
      </div>
    );
  }
}

export default Todos;
