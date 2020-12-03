import React from 'react'

import './Contact.css';

class Contact extends React.Component {
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

                <div id="contact">
                tbc
                </div>


            </div>
        )
    }
}


export default Contact;