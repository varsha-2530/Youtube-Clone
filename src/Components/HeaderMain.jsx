import React, { useState } from 'react';


const HeaderMain = () => {
    const [search, setSearch] = useState('')
    function HandleSubmit(event) {

        // console.log(event);
        setSearch(event.target.value)
        console.log(event.target.value);
    }

    const DataSubmit = (event) => {
        event.preventDefault();
        console.log(search);

    }
    return (
        <div className="main">
            <header className="header">
                <div className="left-section">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                        alt="YouTube Logo"
                        className="logo"
                    />
                    <span className="brand-name">YouTube</span>
                </div>

                <div className="center-section">
                    <div className="search-bar">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search"
                            onChange={HandleSubmit}
                            value={search}

                        />
                        <button type='Submit' className="search-button"
                            onClick={DataSubmit}

                        >
                            🔍</button>
                    </div>
                </div>

                <div className="right-section">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                        alt="User"
                        className="user-icon"
                    />
                </div>
            </header>



        </div>




    );
};

export default HeaderMain;
