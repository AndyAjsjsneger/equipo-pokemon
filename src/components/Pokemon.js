import React, { useState, useEffect } from 'react'

//Equipo Pokemon
import Charizard from '../assets/images/pokemon_006.png'
import Pidgeot from '../assets/images/pokemon_018.png'
import Vileplume from '../assets/images/pokemon_045.png'
import Electabuzz from '../assets/images/pokemon_125.png'
import Lapras from '../assets/images/pokemon_131.png'
import Snorlax from '../assets/images/pokemon_143.png'
import PokemonFragments from './fragments/PokemonFragments'

const Pokemon = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'><br/>
                        <h1>Mi Equipo Pokemon!</h1>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-4'>
                    <PokemonFragments
                        textoDescripcion="Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer."
                        titulo="Charizard"
                        imagen={Charizard}
                        tipo="Fuego - Dragón"
                        debilidad="Agua - Roca - Eléctrico"
                    />
                    </div>

                    <div className='col-4'>
                    <PokemonFragments
                        textoDescripcion="Este Pokémon vuela a una velocidad de 2 mach en busca de presas. Sus grandes garras son armas muy peligrosas."
                        titulo="Pidgeot"
                        imagen={Pidgeot}
                        tipo="Volador - Normal"
                        debilidad="Eléctrico - Hielo - Roca"
                    />
                    </div>

                    <div className='col-4'>
                    <PokemonFragments
                        textoDescripcion="Tiene los pétalos más grandes del mundo. Al caminar, de ellos se desprenden densas nubes de polen tóxico."
                        titulo="Villeplume"
                        imagen={Vileplume}
                        tipo="Planta - Veneno"
                        debilidad="Fuego - Hielo"
                    />
                    </div>

                    <div className='col-4'>
                    <PokemonFragments
                        textoDescripcion="Es habitual que las centrales eléctricas cuenten con Pokémon de tipo Tierra para hacer frente a los Electabuzz ávidos de electricidad."
                        titulo="Electabuzz"
                        imagen={Electabuzz}
                        tipo="Eléctrico"
                        debilidad="Tierra"
                    />
                    </div>

                    <div className='col-4'>
                    <PokemonFragments
                        textoDescripcion="Este Pokémon posee una notable inteligencia y un corazón de oro. Entona un canto melodioso mientras surca el mar."
                        titulo="Lapras"
                        imagen={Lapras}
                        tipo="Agua - hielo"
                        debilidad="Planta - Eléctrico"
                    />
                    </div>

                    <div className='col-4'>
                    <PokemonFragments
                        textoDescripcion="No se encuentra satisfecho hasta haber ingerido 400 kg de comida cada día. Cuando acaba de comer, se queda dormido."
                        titulo="Snorlax"
                        imagen={Snorlax}
                        tipo="Normal - Psíquico"
                        debilidad="Lucha"
                    />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Pokemon