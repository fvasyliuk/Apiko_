import React from "react";
import ListItem from './components/ListItem';
import { Link, Route } from 'react-router-dom'

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      inputValue:'',
      items:[],
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    
  }
  

  handleOnChange(event){
    const inputValue= event.target.value;
    this.setState((state)=>({
      ...state,
      inputValue,
    }))
  }

  handleOnClick(){  
    this.setState((state)=>({
      items: [        
        ...state.items,
        {
          text:state.inputValue,
          id: state.items.length,
          completed: false,
        }, 
      ],
      inputValue: '',      
    }))
  }

  handleItemOnClick = (id)=> ()=>{
      this.setState((state)=>{
        let newItems= [...state.items];
        newItems[id].completed = !newItems[id].completed;
        return({
          inputValue: state.inputValue,
          items: newItems,
        })
      }) 
    }
  


  render(){
    return (
      <div className="App">
        <input onChange={this.handleOnChange} value={this.state.inputValue}/>
        <button onClick={this.handleOnClick}>Додати</button>
        <div>
          <Link to='/'>Всі</Link>
          <Link to='/new'>Нові</Link>
          <Link to='/completed'>Виконані</Link>
        </div>
        <Route exact  path='/' render={()=>
          <ListItem 
            items={this.state.items} 
            handleItemOnClick={this.handleItemOnClick}
          />
        } />
        <Route path='/new' render={()=>
          <ListItem 
            items={this.state.items.filter((item)=>item.completed===false)} 
            handleItemOnClick={this.handleItemOnClick}
          />
        } />
        <Route path='/completed' render={()=>
          <ListItem 
          items={this.state.items.filter((item)=>item.completed===true)} 
            handleItemOnClick={this.handleItemOnClick}
          />
        } />
        
      </div>
    );
  }
}

export default App;