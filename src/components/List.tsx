import React from 'react'
import Sub from '../types'

// no termino de entender porque tengo que volver a definir una interface
// si ya lo hice en el elemento padre
interface Props {
    subs: Array<Sub>
}
const List = ({ subs }: Props) => {
    return (
        <ul>
            {subs.map(sub => {
                return (
                    <li>
                        <img src={sub.avatar} alt={"imagen del avatar"} />
                        <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
                        <p>{sub.description?.substring(0, 100)}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default List