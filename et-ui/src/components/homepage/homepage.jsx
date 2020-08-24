import React, { Component } from 'react';
import coinImage from './../../resources/images/coins.jpg';
import './../../resources/styles/common.css';

class HomePage extends Component{

    render(){
        return(
            <div>
                <div>
                    <h1 className="centered-text" style={{marginTop: "1em"}}>Let the moneyy flow</h1>
                </div>
                <div>
                    <img className="centered-image" style={{marginTop: "5em"}} src={coinImage}></img>
                </div>
            </div>
        )
    }
}

export default HomePage;