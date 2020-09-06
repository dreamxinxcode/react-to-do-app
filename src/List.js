import React from 'react';
import Item from './Item';

export default function List () {
    const fruits = ['Apples', 'Oranges', 'Bananas', 'Grapes', 'Lemons'];

    let fruitList = fruits.map((fruit) => {
        return (<Item name={fruit} />)
    });

    return (
    <ul>{fruitList}</ul>
    )
}