const PokeCard = ({ id, name, type ,base_experience }) => {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return(
        <div>
            <b>{name}</b>
            <img src={image} alt="image"/>
            <ul>
                <li>Type:{type}</li>
                <li>EXP:{base_experience}</li>
            </ul>
        </div>
    )

}

export default PokeCard;