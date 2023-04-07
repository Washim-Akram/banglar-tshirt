import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angty = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>Ring: {angty}</small></p>
        </div>
    );
};

export default Special;