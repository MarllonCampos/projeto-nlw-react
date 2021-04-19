import React, {useState} from 'react'

export function Button({title, ...rest}) {
    const [counter,setCounter] = useState(1)
    return(
        <>
            <span>{counter}</span>
            <button onClick={() => {setCounter(counter + 1)}}>{rest.children}</button>
            <br/>
        </>

    )
}