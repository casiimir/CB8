import { useEffect, useState } from 'react'
import PokemonCard from '@/components/ pokemonCard'
import { Pokemon } from '@/types'
import styles from '@/styles/Pokedex.module.css'

export default function Pokedex() {
  const [localPokedex, setLocalPokedex] = useState<Pokemon[]>([])

  useEffect(() => {
    if (localStorage.getItem('pokedex')) {
      setLocalPokedex(JSON.parse(localStorage.getItem('pokedex') || ''))
    }
  }, [])

  return (
    <div className={styles.Pokedex}>
      {localPokedex.map(pokemon => <PokemonCard pokemonData={pokemon} key={pokemon.name} />)}
    </div>
  )
}