import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import PokemonList from '@/components/pokemonList'
import styles from '../../styles/Pokedex.module.scss'

export default function Pokedex() {
  const router = useRouter()
  const [pokemonSearch, setPokemonSearch] = useState('')
  const [classicPokemonList, setClassicPokemonList] = useState([])
  const [newPokemonList, setNewPokemonList] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=9')
      .then(res => res.json())
      .then(data => setClassicPokemonList(data.results))

    fetch('https://pokeapi.co/api/v2/pokemon/?limit=9&offset=151')
      .then(res => res.json())
      .then(data => setNewPokemonList(data.results))
  }, [])

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pokedex/${pokemonSearch}`)
  }

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value)
  }

  return (
    <>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <input className={styles.inputPokemon} value={pokemonSearch} onChange={onHandleChange} type="text" placeholder='Cerca pokemon' required />
        <input className={styles.btnPokemon} type="submit" value="Cerca" />

        <PokemonList title="Il classico intramontabile" pokemonList={classicPokemonList} />
        <PokemonList title="Una nuova generazione" pokemonList={newPokemonList} />
      </form>
    </>
  )
}
