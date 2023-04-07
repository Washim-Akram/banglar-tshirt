import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('Gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = "Diamond Ring";
    const [money, setMoney] = useState(0);
    return (
        <div className='grandpa'>
            <h2>Grandpa.</h2>
            <h4>Has Money: {money}</h4>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;