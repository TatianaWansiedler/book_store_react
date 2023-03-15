import React from 'react';
import AboutAuthorBlock from '../../components/AboutAuthorBlock';
import BooksContainer from '../../components/BooksContainer';
import Title from '../../components/Title';
import s from './style.module.css'

const AuthorPage = () => {
    return (
        <div className={s.page}>
            <Title text={'The Author’s Book'}/>
            <BooksContainer/>
            <AboutAuthorBlock/>
        </div>
    );
};

export default AuthorPage;