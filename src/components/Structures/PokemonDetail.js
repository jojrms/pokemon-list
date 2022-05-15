const PokemonDetail = ({src, name, type, hp, attack, defense, speed}) => {

    return(
        <article className="articlePokemon">
            <img src={src}/>
            <div className="divInfoBasic">
                <h3>{name}</h3>   
                {type} 
            </div>
            <span className="spanExb">
                HP
                <span className="spanBarer">
                    <span id="spanStatus" style={{width: `${hp}%`}}/>    
                </span>
            </span>
            <span className="spanExb">
                Attack
                <span className="spanBarer">
                    <span id="spanStatus" style={{width: `${attack}%`}}/>    
                </span>
            </span>
            <span className="spanExb">
                Defense
                <span className="spanBarer">
                    <span id="spanStatus" style={{width: `${defense}%`}}/>    
                </span>
            </span>
            <span className="spanExb">
                Speed
                <span className="spanBarer">
                    <span id="spanStatus" style={{width: `${speed}%`}}/>    
                </span>
            </span>
        </article>
    )
}

export default PokemonDetail;