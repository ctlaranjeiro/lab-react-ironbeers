import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import BeerInfo from './BeerInfo';


class RandomBeer extends Component{
    state = {
        randomBeer: []
    }

    componentDidMount () {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => {
                //console.log(response.data)
                this.setState({ randomBeer: response.data });
            });
    }

    render(){
        return(
            <div>
                <Header />
                <BeerInfo beer={this.state.randomBeer} />
            </div>
        )
    }
    
}

export default RandomBeer;