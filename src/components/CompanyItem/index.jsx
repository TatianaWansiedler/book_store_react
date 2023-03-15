import React from 'react';
import s from './style.module.css'


const CompanyItem = ({title,descr,img}) => {
    return (
        <div className={s.item}>
            <img className={s.logo} src={img} alt="company_logo" />
            <p className={s.title}>{title}</p>
            <p className={s.descr}>{descr}</p>
        </div>
    );
};

export default CompanyItem;