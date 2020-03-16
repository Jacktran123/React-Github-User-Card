import React from 'react';
import logo from './logo.svg';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component{
   constructor(){
     super();
     this.state={
        user: {},
        follower: [],
     }
    
   }
   componentDidMount(){
       fetch('https://api.github.com/users/Jacktran123')
       .then(res=>  res.json())
       .then(data=> {
         console.log(data);
         this.setState({user:  data})
          
        
      })
      .catch(err=>console.log('error',err))
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState !== this.state.user) {
       fetch('https://api.github.com/users/Jacktran123/followers')
       .then(res=>res.json())
       .then(res=>{console.log(res);  console.log('obj', res) ;this.setState({follower : res})})
        
    }
  } 
   
 
  

  render(){
    console.log('mochachino',this.state.user)
    return <UserCard user={this.state.user} handleChange={this.handleChange} follower={this.state.follower}/> ;
  }
}

export default App;
