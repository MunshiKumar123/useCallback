import React, { memo } from 'react'

function Child({ count1, setCount1 }) {
    console.log("Child Component Rendred");
    return (
        <>
            <h1>Child Component</h1>

        </>
    )
}

export default memo(Child)
