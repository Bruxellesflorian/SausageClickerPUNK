import React, { Component } from 'react';



class Trophy extends Component {
    render(){
        return(
            <div>
                    {
                    this.props.list >= 1 ?
                    <div className="musique">  
                    <span className="white">TROPHY</span>
                    
                    
                    <div className="defil">  
                    <iframe src="https://www.youtube-nocookie.com/embed/PwHslqdUopk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                        
                    </div>
                    </div>  
                    :
                    <div></div>
                    }

            </div>
        )
    }





}

export default Trophy;

