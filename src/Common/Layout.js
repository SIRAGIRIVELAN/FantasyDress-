import React from 'react';
import MenuBar from './Menu';
import '../styles.css';

const Layout = ({
title = '',
description = '',
className,
children,
}) => (
<div>
    <MenuBar />
    <div className='jumbotron text-center'>
        <h1>{title}</h1>
        <p className='lead'>{description}</p>
    </div>
    <div className={className}>{children}</div>
</div>
);

export default Layout;
