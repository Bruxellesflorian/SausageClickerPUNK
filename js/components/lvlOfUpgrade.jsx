import React, { Component } from 'react';


class LvlOfUpgrade extends Component {
    render() {
        return (
            <div>
                        {
                            this.props.statut > 0 ?
                            <div className="sizeBuyItem">
                                <div className={this.props.classImage}>
                                    <h2 className="showPrice">LVL : {this.props.statut}</h2>
                                </div>
                            </div>
                            :
                            <p></p>

                        }
            </div>
                )
    }
}


export default LvlOfUpgrade;

// balise audio en loops en auto play