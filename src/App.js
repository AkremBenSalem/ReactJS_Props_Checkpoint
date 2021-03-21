import './App.css';
import Profile from './profile/Profile'
import { Component } from 'react';
class App extends Component{
  alrt = (fullName) => {
    alert(fullName);
  }
  render(){
      var fullName = "Jhon The Guy";
      var bio = "A guy that likes to fight";
      var profession = "Fighter";
  return(
      <>
        <Profile fullName={fullName} bio={bio} profession={profession} alrt={this.alrt}> 
        <img src="/imageInPublic.jpg" alt="Will smith in public folder" style={{width : 150}} /> 
        </Profile>
      </>
    );
  }
};

export default App;
