import React, { useState } from 'react'

export const AddCategoria = ({ onNewCategory }) => {
    //aqui se recibe el mismo setCategory desde GifExpertApp.jsx

    const [InputValue, setInputValue] = useState('');

    const InputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const Envio = (event) => {
        event.preventDefault();
        if ( InputValue.trim().length <= 1) return
        //setCategory( categorias => [ InputValue, ...categorias ]);
        //este setCategory, es el arreglo de valores, se desestructura con el ... y se añade de antemano el valor del input
        onNewCategory( InputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ Envio }>
            <input 
                type="text"
                placeholder="Buscar gif"
                value={ InputValue }
                onChange= { InputChange }
            />
        </form>
        
    )
}
