import { useState, useEffect } from 'react'

function GetData() {

    const [pokemon, setPokemon] = useState([])

    const fetchData = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const data = await res.json()
        console.log(data)
        setPokemon(data.results)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>{pokemon.map((p, i) => <h1 key={i}>{p.name}</h1>)}</div>
    )
}

export default GetData