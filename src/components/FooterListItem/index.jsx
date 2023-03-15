import React from 'react';
import s from './style.module.css'

const FooterListItem = ({text}) => {
    return (
        <div className={s.item}>
            <i className="las la-ellipsis-h"></i>
            <p>{text}</p>
        </div>
    );
};

export default FooterListItem;