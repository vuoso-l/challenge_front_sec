import React from 'react'
import "./Message.css";

const Message = ({msg}) => {
    return (
        <div className='messageStyle'>
            <h2>{msg}</h2>
        </div>
    )
}

export default Message
