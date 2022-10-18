const React = require('react');
const Default = require('../layouts/Default.jsx')

class Index extends React.Component{
    render(){
        const {pokemons} = this.props
        return(
            <Default title="Pokedex">
                <ul>
                    {
                        pokemons.map((pokemon) => {
                            const {name, type, readyToFight} = pokemon
                            const capName = name[0].toUpperCase() + name.substring(1)
        const capType = type[0].toUpperCase() + type.substring(1)
                            return (
                                <li key={pokemon._id}>
                                    <a href={`/pokemons/${pokemon._id}`}>
                                    {capName}</a> is a {capType} type Pokemon.
                                    
                                     <br/>
                                    {
                                        readyToFight? 
                                        `${capName} is ready to fight!`:
                                        `${capName} isn\'t ready to fight yet.`
                                    }
                                    <br/>
                                    <form method='POST' action={`/pokemons/${pokemon._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index