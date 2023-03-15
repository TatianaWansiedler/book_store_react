import React from 'react';
import s from './style.module.css'
import MainIcon from '../MainIcon';
import FooterInfoBox from '../FooterInfoBox';

const Footer = () => {
    const explore = [
        {id: 1, text: 'Home'},
        {id: 2, text: 'About'},
        {id: 3, text: 'Articles'},
        {id: 4, text: 'Our Store'},
        {id: 5, text: 'OContact Us'},
    ]
    const utility_pages = [
        {id: 1, text: 'Style Guide'},
        {id: 2, text: '404 Not Found'},
        {id: 3, text: 'Password Protected'},
        {id: 4, text: 'Licenses'},
        {id: 5, text: 'Changelog'},
    ]


    return (
        <footer className={s.footer}>
            <div className={s.icons}>
                <MainIcon/>
                <div className={s.icons_container}>
                    <button className={s.icon_item}>
                        <i className="lab la-facebook-f"></i>
                    </button>
                    <button className={s.icon_item}>
                        <i className="lab la-twitter"></i>
                    </button >
                    <button className={s.icon_item}>
                        <i className="lab la-linkedin-in"></i>
                    </button>
                    <button className={s.icon_item}>
                        <i class="lab la-instagram"></i>
                    </button>
                </div>
            </div>
            <div className={s.footer_item}>
                <h5>Explore</h5>
                <FooterInfoBox list={explore}/>
            </div>
            <div className={s.footer_item}>
                <h5>Utility Pages</h5>
                <FooterInfoBox list={utility_pages}/>
            </div>
            <div className={s.footer_item}>
                <h5>Keep in Touch</h5>
                <div className={s.contact_info}>
                    <p className={s.contact_info_item}>Address :</p>
                    <p className={s.contact_info_data}>24A Kingston St, Los Vegas <br/> NC 28202, USA.</p>
                </div>
                <div className={s.contact_info}>
                    <p className={s.contact_info_item}>Mail :</p>
                    <p className={s.contact_info_data}>support@pages.com</p>
                </div>
                <div className={s.contact_info}>
                    <p className={s.contact_info_item}>Phone :</p>
                    <p className={s.contact_info_data}>(+22) 123 - 4567 - 900</p>
                </div>
            </div> 
        </footer>
    );
};

export default Footer;