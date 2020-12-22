import React, { useState } from 'react'




const BgChange = () => {
    let name = "ClickMe"
    let bgColor = "purple"
    const [Sname, namestate] = useState(name)
    const [Sbg, bgstate] = useState(bgColor)

    const change = () => {
        let newName = "Ouch"
        let newbgColor = "yellow"
        namestate(newName)
        bgstate(newbgColor)
    }
    return (
        <>
            <div style={{ background: Sbg }}>
                <button onClick={change}>{Sname}</button>
            </div>
        </>
    )
}
export default BgChange