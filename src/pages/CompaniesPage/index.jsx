import React from 'react';
import Title from '../../components/Title';
import s from './style.module.css'
import img1 from './comp1.png'
import img2 from './comp2.png'
import img3 from './comp3.png'
import img4 from './comp4.png'
import book from './book.png'
import CompanyItem from '../../components/CompanyItem';

const CompaniesPage = () => {
    const companies = [
        {   
            id: 1, 
            title: 'Amazen Corp.', 
            descr: 'They has been helping readers, music lovers, and videophiles find quality material.',
            img: img1
        },
        {   
            id: 2, 
            title: 'Megan Books', 
            descr: 'We help physical bookstores manage their overstock to the book inventory.',
            img: img2
        },
        {   
            id: 3, 
            title: 'Megank.', 
            descr: 'Bookstore serving up the full spectrum of Black literature and wine black books.',
            img: img3
        },
        {   
            id: 4, 
            title: 'Urban Store', 
            descr: 'We also carry the latest records, issues of all of your favorite comic books.',
            img: img4
        }
    ]
    const decor = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
    return (
        <div className={s.page}>
            <Title text={'Trusted By The Best'}/>
            <div className={s.companies}>
                {
                    companies.map(item => <CompanyItem key={item.id} {...item}/>)
                }
            </div>
            <div className={s.info}>
                <div className={s.container}>
                    <div className={s.description}>
                        <Title text={'Get Book Copy Today!'} style={decor}/>
                        <p className={s.text}>
                            We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.
                        </p>
                    </div>
                    <img className={s.img} src={book} alt="book_image" />
                </div>
            </div>
        </div>
    );
};

export default CompaniesPage;