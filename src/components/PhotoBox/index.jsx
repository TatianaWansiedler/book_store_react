import React from 'react';
import s from './style.module.css'

const PhotoBox = ({img}) => {
    return (
        <div className={s.photo_box}>
            <img src={img} alt="authors_photo" />
        </div>
    );
};

export default PhotoBox;