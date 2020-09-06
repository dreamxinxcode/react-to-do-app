import React, { useState } from 'react';
import './item.css'

export default function Item (props) {
    
    
    return (
        <li className={'fruit-item'}>{props.name}</li>
    )
}