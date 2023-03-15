import React from 'react';
import s from './style.module.css'
import notFoundPage from '../../media/404page.png'

const NotFoundPage = () => {
    return (
        <figure className={s.page}>
            <img className={s.image} src={notFoundPage} alt="" />
        </figure>
    );
};

export default NotFoundPage;