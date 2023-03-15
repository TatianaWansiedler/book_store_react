import React from 'react';
import s from './style.module.css'
import cover from "../../media/book_cover.png"
import OrderButton from '../../components/OrderButton';
import { Link } from 'react-router-dom';
import BookInfoItem from '../../components/BookInfoItem';


const MainPage = () => {
    const bookInfo = [
        {id: 1, title: 'Pages', descr: '250pages'},
        {id: 2, title: 'Length', descr: '10 Hours'},
        {id: 3, title: 'Rating', descr: '4.5/5 (305 ratings)'}
    ]

    return (
        <div className={s.container}>
            <div className={s.description}>
                <h3 className={s.greeting}>
                    Welcome to Pages!!!
                </h3>
                <h4 className={s.subtitle}>Your Books From The Best Writer.</h4>
                <p className={s.text}>We believe that reading books are essential to a healthy culture. They’re where authors can connect with readers.</p>
                <div className={s.actions}>
                    <OrderButton/>
                    <Link to=''>Read Free Demo</Link>
                </div>
                <div className={s.book_info}>
                    {
                        bookInfo.map(item => <BookInfoItem key={item.id} {...item}/>)
                    }
                </div>
            </div>
            <figure className={s.image}>
                <img src={cover} alt="" />
            </figure>
        </div>
    );
};

export default MainPage;