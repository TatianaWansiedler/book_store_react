import React from 'react';
import Title from '../Title';
import author from './author.png'
import s from './style.module.css'
import qrc from './qrcode.png'
import PhotoBox from '../PhotoBox';


const AboutAuthorBlock = () => {
   const decor = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
   }
    return (
        <div className={s.container}>
            <PhotoBox img={author}/>
            <div className={s.info_box}>
                <Title text={'About the Author'} style={decor}/>
                <p className={s.text}>
                    We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.
                </p>
                <div className={s.statistic}>
                    <div className={[s.info_item,s.border].join(' ')}>
                        <p className={s.number}>02</p>
                        <p className={s.info_text}>Books Published</p>
                    </div>
                    <div className={[s.info_item,s.border].join(' ')}>
                        <p className={s.number}>4.5</p>
                        <p className={s.info_text}>User Reviews</p>
                    </div>
                    <div className={s.info_item}>
                        <p className={s.number}>04</p>
                        <p className={s.info_text}>Best Seller Awards</p>
                    </div>
                </div>
                <div className={s.contacts}>
                    <picture>
                        <img src={qrc} alt="" />
                    </picture>
                    <div>
                        <p className={s.name}>John Abraham , Ph.d</p>
                        <p className={s.email}>Mail: johnabraham@gmail.com</p>
                        <p className={s.phone}>Phone: (+2) 123 545 9000</p>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default AboutAuthorBlock;