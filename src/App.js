import React, {Component} from 'react';
import Recipes from './components/recipes';
import Amplify, {Auth} from 'aws-amplify';


function refreshPage() {
        window.location.reload(false);
}

class App extends Component {

    render() {
        return (
            <div>
                <Recipes recipes={this.state.recipes} />
                <button onClick={refreshPage}>Click for a new recipe!</button>
            </div>
        )
    }

    state = {
        recipes: []
    };

    componentDidMount() {
        fetch("https://ebbhyfc5aj.execute-api.us-east-1.amazonaws.com/v1/random", {
            method: 'GET'
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ recipes: data["drinks"] })
            })
            .catch(console.log)
    }

}

export default App;
