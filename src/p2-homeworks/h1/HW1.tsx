import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

export const messageData:messageType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

export type messageType={
    avatar:string
    name:string
    message:string
    time:string
}
function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage avatar={messageData.avatar}
                                name={messageData.name}
                                message={messageData.message}
                                time={messageData.time}/>
            <hr/>
        </div>
    )
}

export default HW1
