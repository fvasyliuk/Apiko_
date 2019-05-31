import React from 'react';
import T from 'prop-types';
import s from './LatestList.module.scss';

function LatestList({ list, isLoading }) {
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div>
            {list.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

LatestList.protoType = {

};

export default LatestList;