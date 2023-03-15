import React from 'react';
import s from './style.module.css'
const TopicsItem = ({topic, number}) => {
    return (
        <div className={s.container}>
            <div className={s.circle}>{number}</div>
            <p className={s.text}>{topic}</p>
        </div>
    );
};

export default TopicsItem;