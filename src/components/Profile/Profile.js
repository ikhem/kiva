import React from 'react';
import axios from 'axios';

export default class Profile extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      user: { }
    }
  }

  componentDidMount(){
    axios.get('/api/Profile').then(res =>{
      console.log(res.data)
      this.setState({ user: res.data.nickname })
      // this.setState({ user: res })
    })
  }
  
  render() {
    return (
      <div>
        <h1>User Profile:</h1>
        {JSON.stringify(this.state.user)}
      </div>
    )
  }
}