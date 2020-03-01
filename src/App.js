import React from 'react';
import User from './components/User'
import './App.css';


class App extends React.Component {

  state = {
    users: [
      {
        id: '1',
        name: 'Alex',
      },
      {
        id: '2',
        name: 'Oleg',
      },
      {
        id: '3',
        name: 'Julia',
      }
    ],
    name: ''
  }

  onUserRemove = id => {
    const updatedUsers = this.state.users.filter(user => user.id !== id);
    this.setState({ users: updatedUsers })
  }


  renderUsers() {
    return this.state.users.map(user =>
      <User
        key={user.id} 
        onUserRemove={this.onUserRemove}
        data={user}
      />
    )
  }

  onInputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  addUser = () => {
    const { users, name } = this.state;
    const updateUsers = [
      ...users,
      {
        id: Math.random() + '',
        name
      }
    ]
    this.setState({
      users: updateUsers,
      name: ''
    })
  }

  render() {
    return (
      <div>
        {this.renderUsers()}
        <br />
        <br />
        Hello - <span>{this.state.name}</span>
        <br />
        <br />
        <input placeholder="Some name" value={this.state.name} onChange={this.onInputChange} type="text" />
        <button onClick={this.addUser}>Add user</button>
      </div>
    )
  }
}

export default App;
