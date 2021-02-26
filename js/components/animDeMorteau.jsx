import React, { Component } from 'react';

class animDeMorteau extends Component {
    constructor(props){
        let rand = Math.random()*95
        super(props);
        this.state = {
            posY : 10,
            posX : rand,
            rotate:0,
            
        }

        const rotation = setInterval(
            this.rotation, 1);
        const interChute = setInterval(
            this.chuteMorteau , 100);
        } 
    rand = () =>{
        return Math.random()*90

    }


    rotation = ()=>{
        rotate: this.state.rotate++
    }    
    chuteMorteau = () =>{
        
        if(this.state.posY < 90){
            posY: this.state.posY++
            
        }else{
            posY: this.state.posY = 0
            posX: this.state.posX = this.rand()
        }
    }


    render() {
        let divStyle = {
            left: this.state.posX +"%",
            top: this.state.posY + "%",
            transform: "rotate("+this.state.rotate+"deg)",
          }; 
        return (
            <div className="runner" style={divStyle}></div>
                )
    }
}


export default animDeMorteau;

// balise audio en loops en auto play
