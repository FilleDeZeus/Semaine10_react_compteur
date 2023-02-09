import React, {useState} from 'react'
import './public/css/bouton.css'
export const Bouton = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <p>Count: {count}</p>
        </div>
    );
}


