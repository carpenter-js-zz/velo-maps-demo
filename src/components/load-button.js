import React from 'react';

export default function LoadButton(props) {
    
    return (
        <button onClick={() => props.loadRoute()}>{props.name}</button>
    )
}