import React from 'react'

import './Bio.css';

class Bio extends React.Component {
    constructor(props){
        super(props)
        
    }
 
    render(){
        return (
            <div>
                <h1>Finn Clough-Holland</h1>
 
                <div id="navigation">
                    <ul>
                        <li><a href="/">Works</a></li>
                        <li><a href="/bio">Bio</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
 
                <div id="bio">
                Finn Clough-Holland lives and works in London.<br/> 
                Recent exhibitions include “London Grads Now” , Saatchi Gallery (2020).<br/>
                <br/>
                Education:<br/>
                MFA Fine Art, Goldsmiths, 2020<br/>
                BA Fine Art and History of Art, Goldsmiths, 2018<br/>
                </div>


            </div>
        )
        }
}


export default Bio;