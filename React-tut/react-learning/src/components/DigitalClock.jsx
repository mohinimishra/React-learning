import React, { useState } from 'react'
const DigitalClick = () => {
    let newTime = new Date().toLocaleTimeString()
    const [state, setstate] = useState(newTime)
    const updateTime = () => {
        newTime = new Date().toLocaleTimeString()
        setstate(newTime)
    }
    setInterval(updateTime, 1000)
    return (
        <>
            <h1>{newTime}</h1>
        </>
    )


}
export default DigitalClick