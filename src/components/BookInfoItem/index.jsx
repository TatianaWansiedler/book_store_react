import React from 'react';
import s from './style.module.css'

const BookInfoItem = ({title, descr}) => {
    return (
        <div className={s.item}>
            <div className={s.circle}></div>
            <div className={s.block}>
                <p className={s.title}> 
                    {title}:
                </p>
                <p className={s.descr}>
                    {descr}
                </p>
            </div>
        </div>
    );
};

export default BookInfoItem;