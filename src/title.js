import React from 'react';

function Title() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}

const headerStyle = {
    background: '#598',
    color: '#fff',
    textAlign: 'center',
    padding: '20px'
}


export default Title;
