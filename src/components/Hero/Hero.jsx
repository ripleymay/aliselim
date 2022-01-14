import React, {useState, useEffect} from 'react';
import './Hero.css'

export default function Hero() {

    const [selectedButton, setSelectedButton] = useState("false");
    
    const handleToggle = () => {
        setSelectedButton(!selectedButton);
    }

    return (
        <div id='herocomp' className={selectedButton ? 'selected' : null}>
            <h1 className='aliselim'>Ali S<button onClick={handleToggle}
            >e</button>l<a href="https://www.imdb.com/name/nm0783180/" target="_blank" id="imdb">i</a>m</h1>
        </div>
    )
}
