import React, { Component } from 'react';
// import logo from './logo-symbol.svg';
// <img src={logo} className="App-logo" alt="logo" />
import './App.css';
import { getColors } from './api/api';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorsLoaded: false,
            colorList: null
        };

        this.setColors = this.setColors.bind(this);
    }

    componentDidMount() {
        getColors(this.setColors)
    }

    setColors(response) {
        this.setState({
            colorsLoaded: true,
            colorList: response.data
        });
    }

    render() {
        return (
            <div className="App">
                <ul>
                    <li>{ console.log(this.state.colorsLoaded) }</li>
                    <li>{ console.log(this.state.colorList) }</li>
                    {this.state.colorsLoaded ? this.state.colorList.map( listValue =>
                        <li key={listValue['color_id']}>{listValue['hex']}</li>) : <li>loading</li> }
                </ul>
            </div>
        );
    }
}

export default App;
