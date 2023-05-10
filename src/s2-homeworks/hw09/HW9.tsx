import React from 'react'
import Clock from './Clock'
import s2 from '../../s1-main/App.module.css'


const HW9 = () => {
    return (
        <div id={'hw9'} className={s2.wrapper}>
            <div className={s2.hwTitle}>
                Homework #9
                <p>Старт и стоп текущего времени</p>
            </div>

            <div className={s2.hw}>
                <Clock />
            </div>
        </div>
    )
}

export default HW9
