import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { PopoverWrapper } from '~/components/Popover';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

const Header = () => {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchResults([2, 1, 3]);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo" />
                </div>
                <Tippy
                    interactive
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopoverWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                {searchResults.map((result) => (
                                    <AccountItem key={result} />
                                ))}
                            </PopoverWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" />

                        <button className={cx('close')}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
};

export default Header;
