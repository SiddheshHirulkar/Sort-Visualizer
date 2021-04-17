import React from 'react';

const SortContent = ({ newArrayOfNum }) => {
    const renderArray = newArrayOfNum.length ? (
        newArrayOfNum.map((num) => {
            return(
                <li style={{height:`${num}px`}} className="sort__bar-array-items"></li>    
            )
        })
    ) : (
        <div>
            <li style={{height:"30px"}} className="sort__bar-array-items"></li>
            <li style={{height:"10px"}} className="sort__bar-array-items"></li>
            <li style={{height:"25px"}} className="sort__bar-array-items"></li>
            <li style={{height:"44px"}} className="sort__bar-array-items"></li>
            <li style={{height:"13px"}} className="sort__bar-array-items"></li>
            <li style={{height:"50px"}} className="sort__bar-array-items"></li>
            <li style={{height:"48px"}} className="sort__bar-array-items"></li>
        </div>

    )
    
    return(
        <div>
            <main className="sort">
                <div className="sort__bar">
                    <ul className="sort__bar-array">
                        {renderArray}
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default SortContent;