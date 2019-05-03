import React from "react";
import ListItem from './components/ListItem';
import T from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { compose, withState, withHandlers } from 'recompose';

function App({
  appState,
  handleOnChange,
  handleOnClick,
  handleItemOnClick,
}) {
  return (
    <div className="App">
      <input onChange={handleOnChange} value={appState.inputValue}/>
      <button onClick={handleOnClick}>Додати</button>
      <div>
        <Link to='/'>Всі</Link>
        <Link to='/new'>Нові</Link>
        <Link to='/completed'>Виконані</Link>
      </div>
      <Route exact  path='/' render={()=>
        <ListItem 
          items={appState.items} 
          handleItemOnClick={handleItemOnClick}
        />
      } />
      <Route path='/new' render={()=>
        <ListItem 
          items={appState.items.filter((item)=>item.completed===false)} 
          handleItemOnClick={handleItemOnClick}
        />
      } />
      <Route path='/completed' render={()=>
        <ListItem 
        items={appState.items.filter((item)=>item.completed===true)} 
          handleItemOnClick={handleItemOnClick}
        />
      }/>      
    </div>
  );
}

App.propTypes = {
  appState: T.shape({
    inputValue: T.string,
    items: T.arrayOf(T.shape({
      text: T.string,
      id: T.number,
      completed:T.bool
    }))
  }),
  handleOnChange: T.func,
  handleOnClick: T.func,
  handleItemOnClick: T.func,
}

export default compose(
  withState('appState', 'setAppState', {inputValue:'', items:[]}),
  withHandlers({
    handleOnChange: (props)=> (event)=> {
      const inputValue= event.target.value; 
      return(
        props.setAppState((appState)=>({
          ...appState,
          inputValue,
        }))
      )
    },
    handleOnClick: (props)=>()=>props.setAppState((appState)=>({
      items: [        
        ...appState.items,
        {
          text:appState.inputValue,
          id: appState.items.length,
          completed: false,
        }, 
      ],
      inputValue: '',      
    })),
    handleItemOnClick: (props)=> (id)=> ()=>{
      props.setAppState((appState)=>{
        let newState= {...appState};
        newState.items[id].completed = !newState.items[id].completed;
        return newState
      }) 
    }
  })
)(App);