import React, { Component } from 'react';
import './styles/base.css';
import { getColors } from './api/api';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Swatch from './components/swatch';
import Detail from './components/detail';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorsLoaded: false,
            colorList: null,
            searchName: '',
            colorSelection: null,
            detailView: false
        };

        this.setColors = this.setColors.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.randomColor = this.randomColor.bind(this);
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

    handleInput(event) {
        this.setState({
            searchName: event.target.value
        });
    }

    handleSubmit(event) {
        if (event.key === 'Enter') {
            // do something
        }
    }

    handleClick(event) {
        if(event.target.innerHTML === "Random Color") {
            this.setState({
                colorSelection: this.randomColor(),
                detailView: true
            });
        } else if(event.target.innerHTML === "Clear") {
            this.setState({
                colorSelection: null,
                detailView: false
            })
        } else {
            this.setState({
                colorSelection: event.target.id,
                detailView: true
            });
        }
    }

    randomColor() {
        return this.state.colorList[Math.floor(Math.random() * this.state.colorList.length)]['hex']
    }

    render() {
        return (
            <div className="app">
                <Header />
                <Sidebar handleClick={ this.handleClick }/>
                {this.state.colorsLoaded ? 
                    (this.state.colorSelection ? 
                        <Detail 
                            colorSelection={ this.state.colorSelection }
                            handleClick={ this.handleClick }/> : 
                        <Swatch colorList={ this.state.colorList } handleClick={ this.handleClick }/>) : 
                    <p>circle...</p>
                }
            </div>
        );
    }
}

export default App;
