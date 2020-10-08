import React, { Component } from 'react';

class App extends Component {

  state = {
    isLoading: false,
    users: [],
  }

  async componentWillMount() {
    this.setState({
      isLoading: true
    })
    const req = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await req.json();
    this.setState({
      isLoading: false,
      users
    })
    // console.log(this.state.users)
  }

  render() {
    const { isLoading, users } = this.state
    return (
      <div>
        {isLoading ? 'Loading ...' : users.map(user => user.name)}
      </div>
    )
  }
}

export default App;