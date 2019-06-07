import React from 'react';
import T from 'prop-types';
import { Link, generatePath, Route } from 'react-router-dom';
import s from './Inbox.module.scss';
import Api from '../../api';
import Chat from '../Chats/ChatsContainer';
import { routes } from '../router';

function Inbox({ items }){ 
    
    return(
        <div className={s.container}>
            <aside className={s.aside}>
                {items.map(it =>( 
                    <Link to={generatePath(routes.chat, { id: it.id })}>{it.product.title} {it.lastMessage && it.lastMessage.text? it.lastMessage.text : null}</Link >
                ))}
            </aside>
            <div className={s.main}> 
                <Route path={routes.chat} component={Chat} exact/>
            </div>
        </div>
    );
}

Inbox.propTypes = {

};

export default Inbox;