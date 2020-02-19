import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component{
  state={persons:[{id:'a1',name:'Sourabh',age:21},{id:'a2',name:'Shivang',age:22},{id:'a3',name:'Suraj',age:30}],showPersons:false}
  deletePersonHandler=(personIndex)=>{
    //const persons=this.state.persons;
    const persons=[...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  nameChangedHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{return p.id===id;});
    const person={...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons:persons});
  }
  tooglePersonsHandler=()=>{
      const doesShow=this.state.showPersons;
      this.setState({showPersons:!doesShow});
  }
  render() {  
    const style={
      backgroundColor:'grey',
      font:'inherit',
      border:'1x solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    let persons=null;
    if(this.state.showPersons)
    {
      persons=(
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person name={person.name} age={person.age} 
            click={()=>this.deletePersonHandler(index)}
             key={person.id}
             changed={(event)=>this.nameChangedHandler(event,person.id)}
             />
          })}
      
      </div>
      );
    }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>This is working..!</p>
      <button style={style} onClick={this.tooglePersonsHandler}>Switch Name</button>
      { persons}
    </div> 
  );
 // return React.createElement('div',{className:'App'},React.createElement('h2',null,'Hello World'));
}
}
export default App;
