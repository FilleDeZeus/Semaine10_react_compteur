import React, {useState} from 'react'
import './public/css/bouton.css'
export const Bouton = () => {
    const [compteur, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(compteur + 1)}>Click Me</button>
            <p>Compteur: {compteur}</p>
        </div>
    );
}


