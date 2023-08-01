import React, { useState } from 'react';

function ToDoItem(props) {
    const [isCompleted, setIsCompleted] = useState(false);

    const style = isCompleted ? {textDecoration: "line-through"} : null

    function completedItem() {
        setIsCompleted(true)
    }

    function deleteItem() {
        props.deleteItem(props.index)
    }

    return (
        <div className='singleToDoItem'>
        {!isCompleted && (
            <button className='complete' onClick={completedItem}></button>
        )}
        <p style={style}>{props.item}</p>
                <button className='remove' onClick={deleteItem}>Remove</button>
        </div>
    )
}

export default ToDoItem