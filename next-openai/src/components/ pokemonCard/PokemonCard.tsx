import { Pokemon } from '@/types'
import styles from './index.module.css'
import { useState } from 'react'

const PokemonCard = ({ pokemonData }: any) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState<Boolean>(false)

  return (
    <div className={styles.PokemonCard}>
      {pokemonData.image ? <img src={pokemonData.image} alt={pokemonData.name} /> : <p>Nessuna immagine disponibile</p>}
      {
        pokemonData.name && <div className={styles.text}>
          <h2>{pokemonData.name}</h2>
          <h3>{pokemonData.type}</h3>
          <em className={styles.showMore} onClick={() => setDescriptionVisible(prev => !prev)}>Show more...</em>
          {isDescriptionVisible && <p>{pokemonData.description}</p>}
          <p>Ability: {pokemonData.ability}</p>
        </div>
      }
    </div>
  )
}

export default PokemonCard