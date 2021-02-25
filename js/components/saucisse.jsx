import React from 'react'
import AddSaucisse from './AddSaussice'
import LvlOfUpgrade from './lvlOfUpgrade'
import AnimDeMorteau from './animDeMorteau'


    export class SaucisseTouch extends React.Component{
        constructor(props){
            super(props);
            this.updateLevel = this.updateLevel.bind(this);
            this.state = {
        levels :                
            [
                { id: 0, name:"lvl1",price:10,func:this.lvl1,class:"styleBucket bucketOfSausage",pc:2,statut:0},
                { id: 1, name:"lvl2",price:50,func:this.lvl2,class:"styleBucket bucketOfSausage2",pc:8,statut:0},
                { id: 2, name:"lvl3",price:100,func:this.lvl3,class:"styleBucket bucketOfSausage3",pc:25,statut:0},
                { id: 3, name:"lvl4",price:300,func:this.lvl4,class:"styleBucket bucketOfSausage4",pc:50,statut:0},
                { id: 4, name:"lvl5",price:200,func:this.lvl5,class:"styleBucket bucketOfSausage5",pc:20,statut:0},
                { id: 5, name:"lvl6",price:5000,func:this.lvl6,class:"styleBucket bucketOfSausage6",pc:200,statut:0},
            ],
      
                 puissanceClick: 1,
                 pcps: 0,
                 clicks : 0 ,
                 inflation :1.20,
                };
        }
                //ON Y ARRIVE PAAAAAAAAAS
        updateLevel = id => {
            let levels = this.state.levels
            console.log(this.state.levels[id].price);
            // puissanceClick += levels[id].pc
            this.setState({
                levels,
              
        })
        }
        clicked = () => {
            this.setState({
                clicks: this.state.clicks + this.state.puissanceClick
            })
        }

        //ON Y ARRIVE PAAAAAAAAAAS !!!!
        upgrade = id => {
            this.setState({
                clicks: this.state.clicks -= this.state.levels[id].price,
                puissanceClick: this.state.puissanceClick += this.state.levels[id].pc,
                prixLvL : this.state.levels[id].price = Math.floor(this.state.levels[id].price * this.state.inflation) ,
                Statut : this.state.levels[id].statut += 1,
            })   
    }
        
        lvl1 = () => {
                this.setState({
                    clicks: this.state.clicks -= this.state.levels[0].price,
                    puissanceClick: this.state.puissanceClick += this.state.levels[0].pc,
                    prixLvL : this.state.levels[0].price = Math.floor(this.state.levels[0].price * this.state.inflation) ,
                    Statut : this.state.levels[0].statut += 1,
                })   
        }
        lvl2 = () => {
            this.setState({
                clicks: this.state.clicks -= this.state.levels[1].price,
                puissanceClick: this.state.puissanceClick += this.state.levels[1].pc,
                prixLvL : this.state.levels[1].price  = Math.floor(this.state.levels[1].price * this.state.inflation) ,
                Statut : this.state.levels[1].statut += 1,
            })   
        }
        lvl3 = () => {
            this.setState({
               
                clicks: this.state.clicks -= this.state.levels[2].price,
                prixLvL : this.state.levels[2].price = Math.floor(this.state.levels[2].price * this.state.inflation) ,
                Statut : this.state.levels[2].statut += 1,
                pcps: this.state.pcps += this.state.levels[2].pc, 
                
            })
        }
        lvl4 = () => {
            this.setState({
                clicks: this.state.clicks -= this.state.levels[3].price,
                prixLvL : this.state.levels[3].price  = Math.floor(this.state.levels[3].price * this.state.inflation) ,
                Statut : this.state.levels[3].statut += 1,
                pcps: this.state.pcps += this.state.levels[3].pc, 
            })
        }
        lvl5 = () => {
            this.setState({
                clicks: this.state.clicks -= this.state.levels[4].price,
                puissanceClick: this.state.puissanceClick += this.state.levels[4].pc,
                prixLvL : this.state.levels[4].price  = Math.floor(this.state.levels[4].price * this.state.inflation) ,
                Statut : this.state.levels[4].statut += 1,
            })
        }
        lvl6 = () => {
            this.setState({
                clicks: this.state.clicks -= this.state.levels[5].price,
                prixLvL : this.state.levels[5].price  = Math.floor(this.state.levels[5].price * this.state.inflation) ,
                Statut : this.state.levels[5].statut += 1,
                pcps: this.state.pcps += this.state.levels[5].pc, 
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
            const listDeCard = this.state.levels.map((level)=>(
                <AddSaucisse 
                    idSaucisse={level.id}
                    clicker={this.state.clicks}
                    lvl={level.price}
                    upgrade={level.func}
                    pc={level.pc}
                    classImage={level.class} // ---> this.props.onUpdate
                />
                ))
                return (
                  
                    <div>
                            {/* <AnimDeMorteau /> */}
                       
                <p>
                {/* <button onClick={()=> this.masterInterval()}>okokok</button> */}
                    {/* {console.log(this.state.levels[2].price) } */}
                    </p>

                <div className="display">
                    <div className="titre storage white ">
                        <div className="flexibleBox">
                            {listDeCard}
                        </div>
                    </div> 

                    <div className="titre store white">
                    {
                    this.state.levels[2].statut >= 1 ?
                    <div className="musique">  
                    <span className="white">TROPHY</span>
                    
                    
                    <div className="defil">  
                    <iframe src="https://www.youtube-nocookie.com/embed/PwHslqdUopk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                        
                    </div>
                    </div>  
                    :
                    <div></div>
                    }
                    <h2>TOTAL SAUSAGE : {this.state.clicks}</h2>
                    <div className="socle">
                            <button onClick={this.clicked} className="animate__animated animate__heartBeat saucisse"><strong>Click on me</strong></button>
                    </div>
                    <div>SAUSAGE POWER  <h2>{this.state.puissanceClick}</h2></div>
                    {
                        this.state.pcps > 0 ?
                        
                        <div>{this.state.pcps}p/s</div>
                        :
                        <div></div>
                    }
                    </div> 
                    
                    <div className="box3">
                        {listCardUpgrade}
                    </div>

                    </div>
                    <div>

                    </div>
                    </div>

                
            )
        }
            
    }