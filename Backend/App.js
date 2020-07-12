import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "<username>",
            response: ""
        }
    }

    componentDidMount() {
        this.getName();
    }

    render() {
        return (
            <div className="titlebox">
                <h1>Hello, {this.state.name}</h1>
                <p>{this.state.response}</p>
            </div>
        );
    }

    getName() {
        fetch("http://localhost:5000/name")
        .then(res => res.json())
        .then((data) => {
            this.setState({ name: data.name, response: JSON.stringify(data) });
        })
        .catch(console.log)
    }
}

export default App;
