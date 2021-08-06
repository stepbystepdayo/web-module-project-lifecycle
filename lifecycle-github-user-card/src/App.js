import React from "react"
import axios from "axios"
import "./App.css"

class App extends React.Component{
  constructor(){
    super();
    this.state={
      githubPic:[],
      githubName:[],
      friendPic:[],
      friendName:[]
    }
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/stepbystepdayo")
    .then(res=> 
     
      this.setState({
      ...this.state,
      githubPic:res.data.avatar_url,
      githubName:res.data.login
    })
    )
    .catch(err=>console.log(err))

  axios.get("https://api.github.com/users/stepbystepdayo/followers")
  .then(res=> 
    // console.log(res)
   
    this.setState({
    ...this.state,
    friendPic:res.data[0].avatar_url,
    friendName:res.data[0].login
  })
  )
  .catch(err=>console.log(err))
  }

  render(){
    return (
      <div className="app">
      <h1>Hello! GitHub🚀🚀</h1>
      <div　className="container">
      <div className="container-self">
      <img src={this.state.githubPic} width={200}/>
      <p>User Name: {this.state.githubName}</p>
      </div>
      <div　className="container-followers">
      <img src={this.state.friendPic} width={200}/>
      <p>User Name: {this.state.friendName}</p>
      </div>
      </div>
      </div>
    )
  }

}

export default App;


  