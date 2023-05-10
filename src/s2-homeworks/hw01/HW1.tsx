import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'


export type MessageType = {
    id: number
    user: {
        avatar: string
        name: string
    }
    message: {
        text: string
        time: string
    }
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Я',
    },
    message: {
        text: 'Текст моего сообщения',
        time: new Intl.DateTimeFormat('ru', {timeStyle: 'short'}).format()
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Мой друг Брэд)',
    },
    message: {
        text: 'Текст сообщения от моего друга',
        time: new Intl.DateTimeFormat('ru', {timeStyle: 'short'}).format()
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'} className={s2.wrapper}>
            <div className={s2.hwTitle}>
                Homework #1
                <p>Попробуй отправить новое сообщение...</p>
            </div>
            <div className={s2.hw}>
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
