import React from 'react';
import { TABLET_BREAKPOINT } from '../constants';

const Navbar = ({ generateNewArray, sortArray }) => {

    const isMobile = window.screen.width <= TABLET_BREAKPOINT;

    return(
        <div>
            <header>
                <nav className="navbar">
                    {!isMobile && <div className="navbar__header">Sort Visualizer</div>}
                    <img alt="icon" src="ascending-sort.png" className="navbar__header-icon" />
                    {/* <div className="navbar__tab">
                        {!isMobile && <label htmlFor="algo-type" className="navbar__tab-label">Sort Algorithm :</label>}
                        <select name="algos" id="algo-type" className="navbar__tab-select">
                            <option className="navbar__tab-select-option" value="bubble sort">Bubble Sort</option>
                        </select>
                    </div> */}
                    <div className="navbar__buttons">
                        <button 
                            className="btn navbar__gen-array"
                            onClick={generateNewArray}    
                        >Generate{!isMobile && 'New Array'}</button>
                        <button 
                            className="btn navbar__sort"
                            onClick={sortArray}
                        >Sort</button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;