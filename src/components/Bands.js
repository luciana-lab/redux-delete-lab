import React from 'react';
import Band from './Band';

const Bands = (props) => {
    console.log(props.bands)
    const renderBands = props.bands.map(band => <Band key={band.id} band={band} deleteBand={props.deleteBand} />)
    return (
        <div>
            {renderBands}
        </div>
    )
}

export default Bands;