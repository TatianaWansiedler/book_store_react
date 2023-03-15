import React from 'react';
import s from './style.module.css'
const ArticleItem = ({img, title, descr, date}) => {
    return (
        <div className={s.item}>
            <img className={s.img} src={img} alt="" />
            <div className={s.articles_descr}>
                <p className={s.title}>{title}</p>
                <p className={s.text}>{descr}</p>
                <p className={s.date}>{date}</p>
            </div>
        </div>
    );
};

export default ArticleItem;