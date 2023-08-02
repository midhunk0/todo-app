// @ts-nocheck
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
    const [isDoneList, setIsDoneList] = useState([]);

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            addItem();
        }
    }

    function addItem() {
        if (inputText !== "") {
            setItems((prevItems) => {
                return [inputText, ...prevItems];
            });
            setIsDoneList((prevList) => {
                return [false, ...prevList];
            });
            setInputText("");
        } 
        else {
            alert("Enter a string to add!");
        }
    }

    function doneItem(id) {
        setIsDoneList((prevList) => {
            return prevList.map((item, index) => {
                return index === id ? !item : item;
            });
        });
    }

    function editItem(id) {
        const itemToEdit = items[id];
        setInputText(itemToEdit);
        setItems((prevItems) =>
            prevItems.map((item, index) => (index === id ? inputText : item))
        );
        deleteItem(id);
    }
      

    function deleteItem(id) {
        setItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
        setIsDoneList((prevList) => {
            return prevList.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    type="text"
                    value={inputText}
                />
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                {items.map((todoItem, index) => (
                    <ToDoItem
                        key={index}
                        id={index}
                        text={todoItem}
                        isDone={isDoneList[index]} 
                        onChecked={deleteItem}
                        onDone={doneItem}
                        onEdit={editItem}
                    />
                ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
