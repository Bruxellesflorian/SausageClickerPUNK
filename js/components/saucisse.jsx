import React from 'react'
import AddSaucisse from './AddSaussice'
import LvlOfUpgrade from './lvlOfUpgrade'
import AnimDeMorteau from './animDeMorteau'
import Trophy from './trophy'
import animDeMorteau from './animDeMorteau'


    export class SaucisseTouch extends React.Component{
        constructor(props){
            super(props);
            this.state = {
        levels :                
            [
                { id: 0, name:"lvl1",price:10,func:this.upgrade,class:"styleBucket bucketOfSausage",pc:2,statut:0},
                { id: 1, name:"lvl2",price:50,func:this.upgrade,class:"styleBucket bucketOfSausage2",pc:8,statut:0},
                { id: 2, name:"lvl3",price:100,func:this.updateParSec,class:"styleBucket bucketOfSausage3",pc:25,statut:0},
                { id: 3, name:"lvl4",price:300,func:this.updateParSec,class:"styleBucket bucketOfSausage4",pc:50,statut:0},
                { id: 4, name:"lvl5",price:200,func:this.upgrade,class:"styleBucket bucketOfSausage5",pc:20,statut:0},
                { id: 5, name:"lvl6",price:5000,func:this.updateParSec,class:"styleBucket bucketOfSausage6",pc:200,statut:0},
            ],
      
                 puissanceClick: 1,
                 pcps: 0,
                 clicks : 0 ,
                 inflation :1.20,
                };
        }
        
        clicked = () => {
            this.setState({
                clicks: this.state.clicks + this.state.puissanceClick
            })
        }

        upgrade = id => {
            this.setState({
                clicks: this.state.clicks -= this.state.levels[id].price,
                puissanceClick: this.state.puissanceClick += this.state.levels[id].pc,
                prixLvL : this.state.levels[id].price = Math.floor(this.state.levels[id].price * this.state.inflation) ,
                Statut : this.state.levels[id].statut += 1,
            })   
        }
        
        updateParSec = id => {
            this.setState({
               
                clicks: this.state.clicks -= this.state.levels[id].price,
                prixLvL : this.state.levels[id].price = Math.floor(this.state.levels[id].price * this.state.inflation) ,
                Statut : this.state.levels[id].statut += 1,
                pcps: this.state.pcps += this.state.levels[id].pc, 
                
            })
        }

        masterInterval = setInterval(() => {             
        this.setState((state) => {
             return {

                        clicks: this.state.clicks = Math.round(this.state.clicks + this.state.pcps/10) 
                    };
              });
          }, 100);



        render(){

            const listCardUpgrade = this.state.levels.map((level)=>(
                <LvlOfUpgrade 
                    statut = {level.statut}
                    classImage = {level.class}
                />
            ))
            const listDeCard = this.state.levels.map((level) =>(
                <AddSaucisse 
                    idSaucisse={level.id}
                    clicker={this.state.clicks}
                    lvl={level.price}
                    upgrade={level.func}
                    valeur={level.id}
                    pc={level.pc}
                    classImage={level.class}
                />
                ))
                const itemList = this.state.items.map((item) =>(
                    <div></div>
                ))
                return (                 
                    <div>
                            <AnimDeMorteau />                  

                    <div className="display">
                    <div className="titre storage white ">
                            <button onClick={this.funce}>TEST</button>
                        <div className="flexibleBox">
                            
                            {listDeCard}
                        </div>
                    </div> 

                    <div className="titre store white">

                        <Trophy list={this.state.levels[2].statut}/>
             
                    <h2>TOTAL SAUSAGE : {this.state.clicks}</h2>
                    <div className="socle">
                        
                            <button onClick={this.clicked} className="animate__animated animate__heartBeat saucisse"><strong>Click on me</strong></button>
                    </div>
                    <div>SAUSAGE POWER <h2>{this.state.puissanceClick}</h2></div>
                    {
                        this.state.pcps > 0 ?
                        
                        <div>{this.state.pcps}/s</div>
                        :
                        <div></div>
                    }
                    </div> 
                    
                    <div className="box3">
                        {listCardUpgrade}
                    </div>

                </div>
               
            </div>

                
            )
        }
            
    }