import React, { useState } from 'react'
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';


export const GiftExpertApp = () => {

  const valores = ['One Punch'];

  const [ Categorias, setCategorias ] = useState( valores );
  

  const onAddCategory = ( newCategory ) => {
    //setCategorias( Categorias + 'omae' )
    //console.log( newCategory );
    if ( Categorias.includes( newCategory ) ) return
    setCategorias([ newCategory, ...Categorias ]);
    
    //setCategorias( cat => [ ...cat, 'Valorant' ]);// Funcionan igual    
  }

  return (
    <>
        <h1>Gift Expert</h1>
        {/* el setCategory es la propiedad que se pasa a AddCategoria.jsx */}
        <AddCategoria 
          //setCategory={ setCategorias }
          onNewCategory={ (valor) => onAddCategory(valor) }  //Este onNewCategory es una funcion que yo estoy creando, no es de React
        />

        { Categorias.map( (categoria) =>
          (
            <GifGrid 
              key={ categoria }
              categoria={ categoria }/>
          )) 
        }

    </>
  )
}
