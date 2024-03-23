import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/1f6dbdd8b0f0f7728dd3641285f4ecc5~c5_300x300.webp?lk3s=a5d48078&x-expires=1711353600&x-signature=ZR1p%2Brkvq%2BHoDPUrCZhOUsrAG%2Fw%3D"
                alt="avatar"
            />
            <div className="wrapper-name">
                <h4 className={cx('name')}>vantoan___</h4>
                <span className={cx('username')}>M10 cạo râu thì đổi tên nhé😀</span>
            </div>
        </div>
    );
};

export default AccountItem;
