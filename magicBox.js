import React from 'react';

function MagicBox({ color }) {
    return (
        <div
            className="Box"
            style={{ backgroundColor: color }}
        />
    )
}

export default MagicBox;