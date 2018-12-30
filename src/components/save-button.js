import React from 'react';

export default function SaveButton(props) {
    
    return (
        <button onClick={() => props.saveRoute()}>{props.name}</button>
    )
}