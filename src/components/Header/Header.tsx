import React from 'react';
import { faRocket, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, FormControl } from 'react-bootstrap';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <>
            <nav className={styles.nav + ' container'}>
                <div className={styles.searchContainer}>
                    <FormControl placeholder='Search' className={styles.searchInput} type='search' />
                    <div className={styles.searchIcon}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="white" id="dropdown-basic" className={styles.sortDropdown}>
                        Sort
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Mais antigas</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Mais novas</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
            <div className={styles.rocketWrapper}>
                <div className="d-flex flex-column align-items-center">
                    <div className={styles.rocketContainer}>
                        <FontAwesomeIcon icon={faRocket} />
                    </div>
                    <h3 className={styles.rocketLabel}>Space Flight News</h3>
                </div>
            </div>
        </>

    )
}

export default Header
