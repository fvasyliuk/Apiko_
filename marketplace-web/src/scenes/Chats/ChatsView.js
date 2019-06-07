import React from 'react';
import T from 'prop-types';
import { Link, generatePath, Route } from 'react-router-dom';
import s from './Chats.module.scss';
import Api from '../../api';
import { routes } from '../router';

function Chats({ items, sendMessage, setText, text }){ 
    
    return(
        <div className={s.container}>            
            {items.map(it =>( it.text))}        
            <div> 
                <input value={text} onChange={evt => setText(evt.target.value)} />
                <button onClick={sendMessage} type="button">Send</button>
            </div>
        </div>
    );
}

Chats.propTypes = {

};

export default Chats;