import React from 'react';
import s from './style.module.css'

const Title = ({text, style}) => {

    return (
        <>
            <h1 className={s.title}>{text}</h1>
            <div className={s.decor} style={style}>
                <span></span>
            </div>
        </>
    );
};

export default Title;