import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from './index.module.scss'

const Pokemon = ({ pokemonData }) => {
  const router = useRouter()
  const [pokemon, setPokemon] = useState({})
  const { types, sprites, name } = pokemon

  const pokemonColor = (type) => {
    switch (type) {
      case 'water':
        return '#00c8ff'
      case 'fire':
        return '#ff7b00'
      case 'grass':
        return '#4fc85b'
    }
  }

  const onHandleClick = () => {
    router.push(`/pokedex/${pokemon.name}`)
  }

  useEffect(() => {
    fetch(pokemonData.url)
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [])

  return pokemon.sprites &&
    <div className={styles.Pokemon} style={{ backgroundColor: pokemonColor(types[0].type.name) }} onClick={onHandleClick}>
      <img src={sprites.other.dream_world.front_default} alt="" />
      <h3>{name}</h3>
    </div>

}

export default Pokemon