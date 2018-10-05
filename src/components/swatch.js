import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/swatch.css';
import '../styles/pagination.css';
import JwPagination from 'jw-react-pagination';

class Swatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: [],
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        this.setState({ 
            pageOfItems: pageOfItems
        });
    }

    render () {
        return (
            <div className='swatch-container'>
                <ul>
                    { this.state.pageOfItems.map(color => 
                        <li key={color.color_id} className="list">
                            <div className="swatch">
                                <div className="tile" style={{backgroundColor: color.hex}} onClick={ this.props.handleClick } id={color.hex}>
                                </div>
                                <span onClick={ this.props.handleClick } id={color.hex}>{ color.hex }</span>
                            </div>
                        </li>) }
    
                </ul>
                <div className="paginate-container">
                    <JwPagination items={ this.props.colorList } onChangePage={this.onChangePage } pageSize={ 12 } />
                </div>
            </div>
        )
    }
}

Swatch.propTypes = {
    colorList: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Swatch;