import React from 'react';
import AuthorBookItem from '../AuthorBookItem';
import s from './style.module.css'
import img1 from './book1.png'
import img2 from './book2.png'

const BooksContainer = () => {
    const books = [
        {
            id: 1, 
            title: 'Atomic One’s', 
            price: 13.84, 
            descr: 'As the book contains theoretical content as well as solved questions.',
            img: img1
        },
        {
            id: 2, 
            title: 'The Dark Light', 
            price: 86.11, 
            descr: 'As the book contains theoretical content as well as solved questions.',
            img: img2
        }
    ]

    return (
        <div className={s.container}> 
            {
                books.map(book => <AuthorBookItem key={book.id} {...book}/>)
            }
        </div>
    );
};

export default BooksContainer;