import React, { useState, useEffect } from 'react';

function Hook() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `you clicked ${count} times`;
        console.log(`count times: ${count}`);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
                click me 
            </button>
        </div>
    )
}

export default Hook;