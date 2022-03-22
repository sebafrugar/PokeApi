import React, { useState } from 'react';

const Pokeapi = (props) => {

    const {pokemon,setPokemon}=props;
    const [elegido,setElegido] = useState()
    const [displaypoke,setDisplaypoke] = useState(false)




    const onClick = () => {

        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>response.json())
        .then(response=>{console.log(response);
            setPokemon(response.results)
        })
        .catch((error)=>console.log("fallo el fetch"))

    }

    const onSubmit = (e) => {
        e.preventDefault()
        setDisplaypoke(true)
    }

    const onChangepoke = (e) =>{
        setElegido(e.target.value)
        setDisplaypoke(false)
    
    }



    return (
        <div>
            <button onClick={onClick}> Traer Pokemones </button>
            <form onSubmit={onSubmit}>
                <label htmlFor="filtro">Filtro : </label>
                <input type="text" name="filtro" onChange={onChangepoke}/>
                <input type="submit" value="Buscar"/>
            </form>
            <div>
                <h2>Pokemon encontrado :</h2>
                {
                    displaypoke && pokemon.filter(p=> p.name === elegido).map(p=> <h3> {p.id} {p.name}</h3>)
                }
            </div>
            <div>
                <h1>Listado de pokemones :</h1>
            </div>
            <div>
                <ol>
                    {
                        pokemon?.map((poke,index)=> <li key={index}>{poke.name}</li>)
                    }
                </ol>
            </div>
        </div>
    );
}

export default Pokeapi;
