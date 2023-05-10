import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'


export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]


export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {

    let afterFilterAffairs = affairs
    if(filter === 'high'){
        afterFilterAffairs = affairs.filter(el => el.priority === filter)
    }
    if(filter === 'low'){
        afterFilterAffairs = affairs.filter(el => el.priority === filter)

    }
    if(filter === 'middle'){
        afterFilterAffairs = affairs.filter(el => el.priority === filter)

    }
    return afterFilterAffairs
}

export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id))
    }

    return (
        <div id={'hw2'} className={s2.wrapper}>
            <div className={s2.hwTitle}>
                Homework #2
                <p>Фильтруем или удаляем</p>
            </div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
