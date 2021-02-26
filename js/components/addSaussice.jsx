import React, { Component } from 'react';

class AddSaucisse extends Component {
    render() {
        return (
            <div>

            {
                this.props.clicker >= this.props.lvl ?
                <div className="sizeBuyItem">
                    <div id={this.props.idSaucisse} className={this.props.classImage} onClick={() => this.props.upgrade(this.props.valeur)}>
                        <h2 className="showPrice"> {this.props.lvl}</h2>
                    </div>
                        <h2>+ {this.props.pc} saucisse</h2>
                </div>
                :
                <p></p>

            }
            </div>
                )
                
    }
}


export default AddSaucisse;

// balise audio en loops en auto play