import React from 'react';
import FooterListItem from '../FooterListItem';

const FooterInfoBox = ({list}) => {
    return (
        <div>
            {
                list.map(el => <FooterListItem key={el.id} {...el}/> )
            }
        </div>
    );
};

export default FooterInfoBox;