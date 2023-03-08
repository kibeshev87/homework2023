import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
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

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Я',  // можно менять
    },
    message: {
        text: 'Текст моего сообщения', // можно менять
        time: new Intl.DateTimeFormat('ru', {timeStyle: 'short'}).format() // можно менять
    },
    // time: new Intl.DateTimeFormat('ru', {timeStyle: 'medium'}).format()
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Мой друг Брэд)', // можно менять
    },
    message: {
        text: 'Текст сообщения от моего друга', // можно менять
        time: new Intl.DateTimeFormat('ru', {timeStyle: 'short'}).format() // можно менять
    },
    // const stringTime = new Intl.DateTimeFormat('ru', {timeStyle: 'medium'}).format(date)// часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты

}

const HW1 = () => {
    return (
        <div id={'hw1'} className={s2.wrapper}>
            <div className={s2.hwTitle}>
                Homework #1
                <p>Попробуй отправить новое сообщение)</p>
            </div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
