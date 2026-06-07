'use client';

import React, { useState } from 'react';

export function BotonLuz() {
    //inicializacion del estado
    const [isOn, setIsOn] = useState(true); //true > encendidio

    //manejo del click
    const handleToggle = () => {
        //operdor ! > negacion
        setIsOn(!isOn); // false > apagado

    }

    return (
        <button onClick={handleToggle}>
            {/*texto dinamico basado en el estado*/}
            {isOn ? 'Encendido' : 'Apagado'}
        </button>
    )
}