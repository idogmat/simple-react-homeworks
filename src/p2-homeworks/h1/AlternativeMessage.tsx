import React from 'react'
import s from "./Message.module.css";
import {messageType} from "./HW1";

function AlternativeMessage(props:messageType) {
    return (
        <div className={`${s.post} ${s.right}`}>
            <img className={s.img} src={props.avatar} alt={props.avatar}/>
            <div className={s.message}>
                <h4 className={s.name}>{props.name}</h4>
                <p className={s.text}>{props.message}</p>
                <span className={s.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default AlternativeMessage
