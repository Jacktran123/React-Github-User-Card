import React from 'react';
import './UserCard.css';

class UserCard extends React.Component{
   constructor(props){
       super(props);

   }

 
   render(){
   
   return <div className="usercardgrandparent">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKLrxMD3UyaJtbKg9xndCtkiynp3sT7SmSwZY9rKw9mcFiJeri" alt="logo" />
     
     <div className="usercardparent"> 
     <div className="usercardchild" >
      <img src={this.props.user.avatar_url} alt="this is an avatar" />
      <p> Name:   {this.props.user.name}</p>
      <p>Location:    {this.props.user.location}</p>
      <p>Bio:     {this.props.user.bio}</p> 
     </div> 
     
     <div className='usercardchild'>
     {this.props.follower.map(use=> 
        <div key={Math.random()} > 
           
      <img src={use.avatar_url} alt="this is an avatar" />
      <p> Name:   {use.login}</p>
      
     </div> 
        )}
    </div>
     </div>
    
   </div> 
   
   }


};

export default UserCard;