import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popover.module.scss';
const cx = classNames.bind(styles);

const Popover = ({ children }) => {
    return <div className={cx('wrapper')}>{children}</div>;
};

export default Popover;
