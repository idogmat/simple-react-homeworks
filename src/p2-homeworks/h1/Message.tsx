import React from 'react'
import {messageType} from "./HW1";
import s from './Message.module.css'

function Message(props: messageType) {
    return (
        <div className={s.post}>
            <img className={s.img} src={props.avatar} alt={props.avatar}/>
            <div className={s.message}>
                <h4 className={s.name}>{props.name}</h4>
                <p className={s.text}>{props.message}</p>
                <span className={s.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
