const React = require('react');

class Default extends React.Component {
    render(){
        const {pokemon, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Galindo&display=swap" rel="stylesheet"/>
                    <title>{title}</title>
                </head>
                <body>
                <nav>
                    <a href="/pokemons">Go To Pokemon Home</a>
                    <a href="/pokemons/new">Want to catch a new pokemon?</a>
                    { pokemon? <a href={`/pokemons/${pokemon._id}/edit`}> Edit {pokemon.date} </a> : ''}
                    { pokemon? <a href={`/pokemons/${pokemon._id}`}> Show {pokemon.date} </a> : ''}
                </nav>
                    <h1>
                        {title}
                    </h1>

                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default