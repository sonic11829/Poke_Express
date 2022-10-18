const React = require('react');
const Default = require('../layouts/Default.jsx');

class Show extends React.Component {
    render () {
        const {name, type, readyToFight, _id} =this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
        const capType = type[0].toUpperCase() + type.substring(1)
        return (
            <Default title={`${capName}`} pokemon={this.props.pokemon}>
                <p> {capName}, is a {capType} type. {readyToFight? `${capName} is ready to fight!`: `${capName} isn\'t ready to fight yet.`} </p>
            </Default>
        );
    }
}

module.exports = Show;