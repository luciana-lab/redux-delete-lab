import React from 'react';

const Band = (props) => {
    // debugger
    console.log(props)
    return (
        <div>
            <li>{props.band.name}</li>
            <button onClick={() => props.deleteBand(props.band.id)}>X</button>
        </div>
    )
}

export default Band;