import React, { useState } from 'react';

export default function AddTodo(props) {
    const [userInput, setUserInput] = useState('');

    const submitAndReset = () => {
        props.submit(userInput)
        return setUserInput('')
    }

    return (
        <div className="add-todo">
            <input type="text" className="user-input" placeholder="new task" value={userInput} onChange={e => setUserInput(e.target.value)} />
            <button className="submit" onClick={() => submitAndReset()}>Submit</button>
        </div>
    )
}