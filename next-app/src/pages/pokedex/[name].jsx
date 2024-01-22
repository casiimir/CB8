import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../../styles/Pokedex.module.scss'

export default function Pokedex() {
  const router = useRouter()
  const [pokemonData, setPokemonData] = useState({})
  const [pokemonSearch, setPokemonSearch] = useState('')

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
      .then(res => res.json())
      .then(data => setPokemonData(data))
  }, [router.query.name])

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(pokemonSearch)
  }

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value)
  }

  return (
    <>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <input className={styles.inputPokemon} value={pokemonSearch} onChange={onHandleChange} type="text" placeholder='Cerca pokemon' required />
        <input className={styles.btnPokemon} type="submit" value="Cerca" />
      </form>
      {
        pokemonData.sprites ? <div className={styles.Pokedex}>
          <img className={styles.image} src={pokemonData.sprites.other.showdown.front_default} alt="" />

          <h1 className={styles.title}>{pokemonData.name.toUpperCase()}</h1>

          <div className={styles.type}>
            {pokemonData.types.map((type, i) =>
              <p key={i}>{type.type.name}</p>
            )}
          </div>

          <div className={styles.info}>
            <p>Peso: {pokemonData.weight}</p>
            <p>Altezza: {pokemonData.height}</p>
          </div>

          <ul className={styles.stats}>
            {
              pokemonData.stats.map((stat, i) => <li className={styles.stat} key={i}>
                <p>{stat.base_stat}</p>
                <p>{stat.stat.name}</p>
              </li>)
            }
          </ul>
        </div> : <p className={styles.notFound}>{router.query.name + ' non trovato'}</p>
      }
    </>
  )
}
