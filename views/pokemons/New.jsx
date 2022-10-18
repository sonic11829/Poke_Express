const React = require('react')
const Default = require('../layouts/Default.jsx');

class New extends React.Component {
    render(){
        return (
            <Default title="Catch a new pokemon!">
            <form method="POST" action="/pokemons">
                Name: <input type="text" name="name" placeholder='Name of pokemon'></input><br/>
                Type: <input type="text" name="type" placeholder='Type of pokemon'></input><br/>
                Ready To Fight: <input type="checkbox" name="readyToFight"></input><br/>
                <input type="submit" value="Submit Pokemon"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New