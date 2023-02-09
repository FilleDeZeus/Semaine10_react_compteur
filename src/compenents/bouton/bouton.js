import React, {useState} from 'react'
import './public/css/bouton.css'

//FONCTION BOUTON
export const Bouton = () => {
    //Tableau
    const [compteur, setCount] = useState(0);

    return (
        <div>
            {/* BOUTON QUI PERMET AU CLICK D'APPELER LA FONCTION */}
            <button onClick={() => setCount(compteur + 1)}>Click Me</button>
            <p>Compteur: {compteur}</p>
        </div>
    );
}


