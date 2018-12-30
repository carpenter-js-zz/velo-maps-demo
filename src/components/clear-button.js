import React from 'react';

export default function ClearButton(props) {
    
    return (
        <button onClick={() => props.clearRoute()}>{props.name}</button>
    )
}