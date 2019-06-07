import React from 'react';
import T from 'prop-types';
import { Link, generatePath } from 'react-router-dom';
import s from './LatestList.module.scss';
import { routes } from '../router';

function LatestList({ list, isLoading }) {
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div>
            {list.map(item => (
                <Link to={generatePath(routes.product, { id: item.id })}><div key={item.id}>{item.title}</div></Link>
            ))}
        </div>
    );
};

LatestList.protoType = {

};

export default LatestList;