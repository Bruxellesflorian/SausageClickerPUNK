import React from 'react'
import AddSaucisse from './addSaussice'


    export class SaucisseTouch extends React.Component{
        constructor(props){
            super(props);
            this.state = {
        levels :                
            [
                {name:"lvl1",price:10,func:this.lvl1 },
                {name:"lvl2",price:100,func:this.lvl2},
                {name:"lvl3",price:500,func:this.lvl3}
            ],
                 obj : 0,
                 lvl1 : 10,
                 lvl1b : 0,
                 lvl2 : 100,
                 lvl2b : 0,
                 lvl3 : 300,
                 lvl3b : 0,
                 lvl4 : 600,
                 lvl4b : 0,
                 puissanceClick: 1,
                 pcps: 0,
                 clicks : 0 
                };
        }
        clicked = () => {
            this.setState({
                clicks: this.state.clicks + this.state.puissanceClick
            })
        }
        lvl1 = () => {
                this.setState({
                    clicks: this.state.clicks -= this.state.lvl1,
                    puissanceClick: this.state.puissanceClick += 2,
                    lvl1:   this.state.lvl1 += 10,
                    lvl1b : this.state.lvl1b += 1,
                    
                })   
        }
        lvl2 = () => {
            this.setState({
                clicks: this.state.clicks -= this.state.lvl2,
                puissanceClick: this.state.puissanceClick += 8,
                lvl2:   this.state.lvl2 += 100,
                lvl2b : this.state.lvl2b += 1,

            })
        }
        lvl3 = () => {
            this.setState({
                obj: this.state.obj = 1,
                clicks: this.state.clicks -= this.state.lvl3,
                lvl3:   this.state.lvl3 += 100,
                lvl3b:  this.state.lvl3b += 1,
                pcps:   this.state.pcps += 25,
            })
            const interval = setInterval(() => {
                 this.setState({clicks: this.state.clicks += 25})
              }, 1000);
        }
        lvl4 = () => {
            this.setState({
                obj: this.state.obj = 1,
                clicks: this.state.clicks -= this.state.lvl4,
                lvl4:   this.state.lvl4 += 100,
                lvl4b:  this.state.lvl4b += 1,
                pcps:   this.state.pcps += 100,
            })
            const interval = setInterval(() => {
                 this.setState({clicks: this.state.clicks += 100})
              }, 1000);
        }
        // anim = () => {
        //     let inter = false
        //     // let calClass =
        //     const testingInterval = setInterval(()=>{
        //         {
        //             inter === false ?

        //         }
        //     },10000)
        // }
        handleDelete = id => {
            const clients = this.state.clients.slice();
            const index = levels.findIndex((level)=>{
                return level.id === id
            });
            level.splice(index, 1)
            this.setState({ levels: levels})
            console.log(id);
        }
        
        changeform = () =>{
            alert("ok")
        }
        render(){
            // const listLVL = this.state.levels.map((level)=>( 
            //     <div className="sizeBuyItem">
            //         <div onClick={level.func}  className="styleBucket bucketOfSausage">
            //             <h2 className="showPrice"> {level.price}</h2>
            //         </div>
            //     </div>
            //     ))
            const jean = this.state.levels.map((jacky)=>(
                <li>{jacky.name}</li>
            ))
         
            return (
                <div>
                <div className="display">
                    <div className="titre storage white ">
                        <div className="flexibleBox">
    
                            {/* {listLVL} */}
                            <AddSaucisse />
                        {
                            this.state.clicks >= this.state.lvl1 ?
                            <div className="sizeBuyItem">
                                <div onClick={this.lvl1} className="styleBucket bucketOfSausage">
                                    <h2 className="showPrice"> {this.state.lvl1}</h2>
                                </div>
                            </div>
                            :
                            <p></p>

                        }
                        {
                            this.state.clicks >= this.state.lvl2 ?
                            <div className="sizeBuyItem">
                                <div onClick={this.lvl2} className="styleBucket bucketOfSausage2">
                             
                                    <h2 className="showPrice"> {this.state.lvl2}</h2>
                                </div>
                            </div>
                            :
                            <p></p>
                        }
                        {
                            this.state.clicks >= this.state.lvl3 ?
                            <div className="sizeBuyItem">
                                <div onClick={this.lvl3} className="styleBucket bucketOfSausage3">

                                    <h2 className="showPrice"> {this.state.lvl3}</h2>
                                </div>
                            </div>
                            :
                            <p></p>
                        }
                        {
                            this.state.clicks >= this.state.lvl4 ?
                            <div className="sizeBuyItem">
                                <div onClick={this.lvl4} className="styleBucket bucketOfSausage4">

                                    <h2 className="showPrice"> {this.state.lvl4}</h2>
                                </div>
                            </div>
                            :
                            <p></p>
                        }
                        </div>
                    </div> 

                    <div className="titre store white">
                    {
                    this.state.obj >= 1 ?
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
                            <button onClick={this.clicked} className="saucisse"><strong>Click on me</strong></button>
                    </div>
                    <div>SAUSAGE POWER  <h2>{this.state.puissanceClick}</h2></div>
                    </div> 
                    
                    <div className="box3">
                        {
                            this.state.lvl1 > 10 ?
                            <div className="sizeBuyItem">
                                <div className="styleBucket bucketOfSausage">
                                    <h2 className="showPrice">LVL : {this.state.lvl1b}</h2>
                                </div>
                            </div>
                            :
                            <p></p>

                        }
                        {
                            this.state.lvl2 > 100 ?
                            <div className="sizeBuyItem">
                                <div className="styleBucket bucketOfSausage2">
                                    <h2 className="showPrice">LVL : {this.state.lvl2b}</h2>
                                </div>
                            </div>
                            :
                            <p></p>

                        }
                        {
                            this.state.lvl3 > 300 ?
                            <div className="sizeBuyItem">
                                <div className="styleBucket bucketOfSausage3">
                                    <h2 className="showPrice">LVL : {this.state.lvl3b} = {this.state.pcps}/s</h2>
                                </div>
                            </div>
                            :
                            <p></p>

                        }
                        {
                            this.state.lvl4 > 600 ?
                            <div className="sizeBuyItem">
                                <div className="styleBucket bucketOfSausage4">
                                    <h2 className="showPrice">LVL : {this.state.lvl4b} = {this.state.pcps}/s</h2>
                                </div>
                            </div>
                            :
                            <p></p>

                        }
                    </div>

     </div>
                    <div>

                    </div>
    </div>

                
            )
        }
            
    }