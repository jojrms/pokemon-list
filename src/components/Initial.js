import { useEffect, useState } from "react";
import PokemonDetail from "./Structures/PokemonDetail";

const Initial = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [pokemons, setPokemons] = useState([])

    const getAllPokemons = async () => {
        const res = await fetch(url)
        const data = await res.json()
    
        function createPokemonObject(results)  { 
          results.forEach( async pokemon => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data =  await res.json()

            console.log(data);

            setPokemons( currentList => [...currentList, data])
            })
        }
        createPokemonObject(data.results)
      }
    
     useEffect(() => {
      getAllPokemons()
     }, [])


    return(
        <section id="sectionAbsolute">
            <header>
                <span id='spanBlur'/>
                <i/>
                <ul>
                    <li>Pokedex</li>
                    <li>Types</li>
                    <li>Events</li>
                </ul>
                <button/>  
            </header>
            <aside className="asideInitial">
                <div>
                    <h2>Qual Pokemón Você Quer?</h2>
                    <h1>Charizard</h1>
                    <p> Charizard voa pelo céu em busca de oponentes poderosos. 
                    Ele respira um calor tão grande que derrete qualquer coisa. No entanto, 
                    nunca dá um sopro ardente a qualquer oponente mais fraco que ele. O poder 
                    avassalador que preenche todo o corpo faz com que fique preto e crie intensas chamas azuis.
                    </p>
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/R.73f85765c371e811749f416a27e1aca0?rik=r3ljTJdHCltYEw&pid=ImgRaw&r=0"/>
                </div>
            </aside>

            <aside>
                <h2>Pokedéx</h2>
                <aside className="asideExibitionPokemons">
                    {pokemons.map( (pokemon) => 
                        <PokemonDetail
                            src={pokemon.sprites.other.dream_world.front_default}
                            name={pokemon.name}
                            type={pokemon.types.map( type => {
                                return(
                                    <span className={type.type.name}/>
                                )
                            })}
                            hp={pokemon.stats[0].base_stat}
                            attack={pokemon.stats[1].base_stat}
                            defense={pokemon.stats[2].base_stat}
                            speed={pokemon.stats[3].base_stat}
                        />
                    )}
                </aside>
            </aside>
        </section>
    )

}

export default Initial;