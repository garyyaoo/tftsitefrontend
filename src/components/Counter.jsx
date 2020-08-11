import React from 'react';

export default function Counter(props) {
    const { gameCount = 0 } = props;

    return (
    <span style={{ float: 'right', marginRight: '10px' }}>{`Games Analyzed: ${gameCount}`}</span>
    )
}

