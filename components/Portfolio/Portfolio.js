import React from 'react'

import './Portfolio.css';

import piece1img1 from './Artworks/Piece 1 (1 of 3).jpg';
import piece1img2 from './Artworks/Piece 1 (2 of 3).jpg';
import piece1img3 from './Artworks/Piece 1 (3 of 3).jpg';
import piece2img1 from './Artworks/Piece 2 (1 of 2).jpg';
import piece2img2 from './Artworks/Piece 2 (2 of 2).jpg';
import piece3img1 from './Artworks/Piece 3 (1 of 2).jpg';
import piece3img2 from './Artworks/Piece 3 (2 of 2).jpg';
import piece4img1 from './Artworks/Piece 4 (1 of 2).jpg';
import piece4img2 from './Artworks/Piece 4 (2 of 2).jpg';
import piece5img1 from './Artworks/Piece 5 (1 of 2).jpg';
import piece5img2 from './Artworks/Piece 5 (2 of 2).jpg';
import piece6img1 from './Artworks/Piece 6 (1 of 2).jpg';
import piece6img2 from './Artworks/Piece 6 (2 of 2).jpg'; 
import piece7img1 from './Artworks/Piece 7 (1 of 1).jpg';

class Portfolio extends React.Component {
    constructor(props){
        super(props)
        this.state={
            piece1:piece1img1,
            piece2:piece2img1,
            piece3:piece3img1,
            piece4:piece4img1,
            piece5:piece5img1,
            piece6:piece6img1
        }
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

                <div id="piece1">
                    <img src={this.state.piece1} className="portfolioImages" alt="Finn Clough-Holland"/>
                    <div className="icons">
                        <img src={piece1img1} className="iconImages" onClick={()=>this.setState({piece1:piece1img1})} alt="Finn Clough-Holland"/>
                        <img src={piece1img2} className="iconImages" onClick={()=>this.setState({piece1:piece1img2})} alt="Finn Clough-Holland"/>
                        <img src={piece1img3} className="iconImages" onClick={()=>this.setState({piece1:piece1img3})} alt="Finn Clough-Holland"/>
                    </div>
                    <br/>
                    <div className="pieceBio">
                    <p>Deconstructed television screen, alkyd paint, acrylic foam tape, acrylic board, shellac-based primer - 53.6 x 95.3 cm - 2020</p>
                    </div>
                </div>
                <br/>
                <hr className="pieceBreak"/>


                <div id="piece2">
                    <img src={this.state.piece2} className="portfolioImages" alt="Finn Clough-Holland"/>
                    <div className="icons">
                        <img src={piece2img1} className="iconImages" onClick={()=>this.setState({piece2:piece2img1})} alt="Finn Clough-Holland"/>
                        <img src={piece2img2} className="iconImages" onClick={()=>this.setState({piece2:piece2img2})} alt="Finn Clough-Holland"/>
                    </div>
                    <div className="pieceBio">
                    <p>Alkyd paint, mirror - 58.5 x 89 cm - 2020</p>
                    </div>
                </div>
                <br/>
                <hr className="pieceBreak"/>


                <div id="piece3">
                    <img src={this.state.piece3} className="portfolioImages" alt="Finn Clough-Holland"/>
                    <div className="icons">
                        <img src={piece3img1} className="iconImages" onClick={()=>this.setState({piece3:piece3img1})} alt="Finn Clough-Holland"/>
                        <img src={piece3img2} className="iconImages" onClick={()=>this.setState({piece3:piece3img2})} alt="Finn Clough-Holland"/>
                    </div>
                    <div className="pieceBio">
                    <p>Alkyd paint, mirror - 70.5 cm x 101.5 cm - 2020</p>
                    </div>
                </div>
                <br/>
                <hr className="pieceBreak"/>


                <div id="piece4">
                    <img src={this.state.piece4} className="portfolioImages" alt="Finn Clough-Holland"/>
                    <div className="icons">
                        <img src={piece4img1} className="iconImages" onClick={()=>this.setState({piece4:piece4img1})} alt="Finn Clough-Holland"/>
                        <img src={piece4img2} className="iconImages" onClick={()=>this.setState({piece4:piece4img2})} alt="Finn Clough-Holland"/>
                    </div>
                    <div className="pieceBio">
                    <p>Alkyd paint, mirror - 30 x 30 cm - 2020</p>
                    </div>
                </div>
                <br/>
                <hr className="pieceBreak"/>


                <div id="piece5">
                    <img src={this.state.piece5} className="portfolioImages" alt="Finn Clough-Holland"/>
                    <div className="icons">
                        <img src={piece5img1} className="iconImages" onClick={()=>this.setState({piece5:piece5img1})} alt="Finn Clough-Holland"/>
                        <img src={piece5img2} className="iconImages" onClick={()=>this.setState({piece5:piece5img2})} alt="Finn Clough-Holland"/>
                    </div>
                    <div className="pieceBio">
                    <p>Deconstructed television screen, electrical tape, gaffer tape - 69.5 cm x 123.6 cm, 2020</p>
                    </div>
                </div>
                <br/>
                <hr className="pieceBreak"/>


                <div id="piece6">
                    <img src={this.state.piece6} className="portfolioImages" alt="Finn Clough-Holland"/>
                    <div className="icons">
                        <img src={piece6img1} className="iconImages" onClick={()=>this.setState({piece6:piece6img1})} alt="Finn Clough-Holland"/>
                        <img src={piece6img2} className="iconImages" onClick={()=>this.setState({piece6:piece6img2})} alt="Finn Clough-Holland"/>
                    </div>
                    <div className="pieceBio">
                    <p>Alkyd paint, glass, shellac-based primer, 2020 - 40 x 50 cm </p>
                    </div>
                </div>
                <br/>
                <hr className="pieceBreak"/>


                <div id="piece7">
                    <img src={piece7img1} className="portfolioImages" alt="Finn Clough-Holland"/>
                    <div className="pieceBio">
                    <p>Alkyd paint, glass, shellac-based primer, 50 cm x 127 cm, 2020</p>
                    </div>
                </div>
                <br/>
                <hr className="pieceBreak"/>


            </div>
        )
    }
}


export default Portfolio;