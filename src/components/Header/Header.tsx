import React from 'react';
import { faRocket, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'react-bootstrap';
import styles from './Header.module.scss'
import { DebounceInput } from 'react-debounce-input';

const Header = ({ search, setOrder }: any) => {
    const handleOrder = (order: string) => {
        setOrder(order);
    }

    const handleSearch = ({ target }: any) => {
        search(target.value)
    }
    return (
        <>
            <nav className={styles.nav + ' container'}>
                <div className={styles.searchContainer}>
                    <DebounceInput
                        className={styles.searchInput + ' form-control'}
                        placeholder="Buscar..."
                        minLength={1}
                        id="search"
                        debounceTimeout={200}
                        onChange={handleSearch}
                    />
                    <div className={styles.searchIcon}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className={styles.sortDropdown}>
                        Ordenar por data
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant='outline-primary'>
                        <Dropdown.Item onClick={() => handleOrder('asc')}>Mais antigas</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => handleOrder('desc')}>Mais novas</Dropdown.Item>
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
