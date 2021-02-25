import React, { Component } from 'react';

let rand = Math.random()*100+ "%"
let posY = 0 

let divStyle = {
            left: rand,
            top: posY + '%'
          }; 


class animDeMorteau extends Component {
    chute = setInterval(() => {             
        this.setState((state) => {
            posY++  
            console.log(posY);
            divStyle ={
                left: rand,
                top: posY + '%'
            }
            if(posY == 20){
                clearInterval(chute)
            }
        });
    }, 100);
    


    render() {

        return (
            <div className="runner" style={divStyle}>
            </div>
                )
    }
}


export default animDeMorteau;

// balise audio en loops en auto play
