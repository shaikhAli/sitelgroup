import './SearchBar.css';
import { useState } from 'react';

const search = () => {
    console.log("searched")
}
const clearSearch = () => {
    console.log("clear")
}

const SearchBar = () => {

    const [searchDropdown, openSearchDropdown] = useState(false);
    const [locationModal, openLocationModal] = useState(false);

    const handleLocationModal = () => {
        openLocationModal(!locationModal);
        openSearchDropdown(!searchDropdown);
    }

    const handleSearchDropdown = () => {
        openLocationModal(false);
        openSearchDropdown(!searchDropdown);
    }

    return (
        <>
            <div className='search-container'>

                <div className="dropdown"
                    onClick={handleSearchDropdown}
                >
                    <div className="search-btn-bar1"></div>
                    <div className="search-btn-bar2"></div>
                    <div className="search-btn-bar3"></div>


                </div>

                <div className={"dropdown-content " + (searchDropdown ? 'show-search-dropdown' : '')}>
                    <div className='dropdown-container'>
                        <p
                            className='location-link'
                            onClick={handleLocationModal}
                        >
                            Location
                        </p>
                        <p>Rule</p>
                        <p>MiComponents/Indicatorlk</p>
                        <p>Modified By</p>
                        <p>Created By</p>
                    </div>
                </div>

                <div className={"dropdown-content-location " + (locationModal ? 'dropdown-content-location-modal-show' : '')}>
                    <div className='location-container'>
                        <div className='header'>
                            Location
                        </div>
                        <div className='content'>
                            <p>Contains</p>
                            <input
                                className='content-input'
                                type={"text"}
                                placeholder='Value'
                            />

                        </div>
                        <div className='apply-btn'>
                            Apply
                        </div>
                    </div>
                </div>

                <input className="search-bar" type={"text"} placeholder="Search or Filter Menu3" />
                <div className='search-btn-container'>
                    <button className='btn-regular' onClick={search} >Search</button>
                    <button className='btn-regular' onClick={clearSearch} >Clear</button>
                </div>

            </div>
        </>
    )
}

export default SearchBar;