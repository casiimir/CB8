import OpenAI from "openai";
import { useState } from 'react'
import PokemonCard from '../ pokemonCard'
import { Pokemon } from '@/types'
import styles from './index.module.css'

const NewPokemon = () => {
  const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY, dangerouslyAllowBrowser: true });

  const [pokemon, setPokemon] = useState<Pokemon>({
    ability: "",
    weaknesses: [""],
    description: "",
    name: "",
    type: "",
    image: ""
  })

  const onHandleGenerate = async () => {
    const data = await openai.chat.completions.create({
      messages: [{ role: "system", content: "Puoi scrivere un file in formato JSON di un pokemon che non esiste ancora e che abbia nome, tipo, abilità e debolezze random. Aggiungi anche una descrizione. Scrivi soltanto codice JSON, e con nomi di chiave in inglese" }],
      model: "gpt-3.5-turbo",
    });
    setPokemon(JSON.parse(data.choices[0].message.content || ""))

    const image = await openai.images.generate({ model: "dall-e-3", prompt: pokemon.description + ' realizza una illustrazione del pokemon senza alcun testo. Lo sfondo dell immagine deve riprendere il tipo del pokemon, colori pastello piatti e stile cartoon tipico' });
    setPokemon(prev => ({ ...prev, image: image.data[0].url || "" }));
  }

  const onHandleClick = () => {
    const localPokedex = localStorage.getItem('pokedex');
    const updatedPokedex = localPokedex ? JSON.parse(localPokedex) : [];

    localStorage.setItem('pokedex', JSON.stringify([...updatedPokedex, pokemon]));
  }

  return (
    <div className={styles.NewPokemon}>
      <PokemonCard pokemonData={pokemon} />
      <button onClick={onHandleGenerate}>Generate</button>
      <button onClick={onHandleClick}>Add to Pokedex</button>
    </div>
  )
}

export default NewPokemon