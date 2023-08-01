import React from "react";

function ToDoForm(props) {
    const handleSubmit = (e) => {
        e.preventDefault();

        props.addItem(e.target[0].value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input className="itemInput" type="text" />
            <button className="addItemButton">Add Item</button>
        </form>
    )
}

export default ToDoForm;