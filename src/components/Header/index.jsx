import React from 'react';
import MainIcon from '../MainIcon';
import Nav from '../Nav';
import OrderButton from '../OrderButton';
import s from './style.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.info}>
                <MainIcon/>
                <div className={s.icons}>
                    <div className={s.icon_box}>
                        <i className="lab la-facebook-f"></i>
                    </div>
                    <div className={s.icon_box}>
                        <i className="lab la-twitter"></i>
                    </div >
                    <div className={s.icon_box}>
                        <i className="lab la-linkedin-in"></i>
                    </div>
                </div>
            </div>
            <Nav/>
            <OrderButton/>
        </header>
    );
};

export default Header;