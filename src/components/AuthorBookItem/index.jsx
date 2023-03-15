import React from 'react';
import s from './style.module.css'

const AuthorBookItem = ({title,price,descr,img}) => {
    return (
        <div className={s.item}>
            <img src={img} alt="book_cover"/>
            <div className={s.info}>
                <h4 className={s.title}>{title}</h4>
                <p className={s.price}>$ {price} USD</p>
                <p className={s.descr}>{descr}</p>
                <div className={s.decor}>
                    <div className={s.circle}></div>
                    <p className={s.text}>Printed Book</p>
                </div>
            </div>
        </div>
    );
};

export default AuthorBookItem;