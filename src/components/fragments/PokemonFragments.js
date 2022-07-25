import React, { useState, useEffect } from 'react'

const PokemonFragments = ({imagen, titulo, textoDescripcion, tipo, debilidad}) => {
    return (
        <>
            <div className='col-4'>
                <div className="card" style={{ width: "18rem"}}>
                    <img src={imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{textoDescripcion}</p>
                        <b className="card-text">Tipo: {tipo}</b>
                        <p className="card-text">Debilidades: {debilidad}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PokemonFragments