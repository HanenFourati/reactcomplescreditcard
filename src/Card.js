import React, { Component } from 'react';
import './Card.css';
import i from './gold.png'
import ii from './visa.jpg'
/*const logMyName = () => {
  console.log('MY NAME IS SAM')
}*/

class Card extends Component {
  
  constructor(props) {
  
    super(props)
   
    this.state = {
      cardnb: '**** **** **** ****', 
      cardhl: '**********',
       cardth: '**/**',
       msg:'',
        }
       
        this.ChangeCardNumber=this.ChangeCardNumber.bind(this);
        this.ChangeCardName=this.ChangeCardName.bind(this);
        this.ChangeCardDate=this.ChangeCardDate.bind(this);
   
  }
  ChangeCardNumber(event) {
    event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    if (event.target.value.length < 20)
    {  this.setState({

      cardnb: event.target.value,
      msg: '',

    })}
else {
  this.setState({

    msg: 'The number must has a maximum length of 16 characters',

  })
 }
    
  }
  ChangeCardName(event) {
   
  if (event.target.value.length < 20)
    {  this.setState({

      cardhl: event.target.value.toUpperCase(),
      msg: '',
    })}
else {
  this.setState({

    msg: 'The name must has a maximum length of 20 characters',
 
  })
 }
  }
  ChangeCardDate(event) {
    
    
    this.setState({

      cardth: (event.target.value).split("").slice(0,2).join("")+"/"+(event.target.value).split("").slice(2,4).join(""),

    })
    
  }
  render() {
    return (
      <div className="cardcomplex">
      <div className="Card-style">
       <h1>CREDIT CARD</h1>
      <img id="firstimage" src={i} alt=""/>
      <div className="emptydiv"></div>    
      <div className="twodivspart">
      <div className="firstpart">
      <p id="highlighted">{this.state.cardnb}</p>
       <div className="inlinecontent"> 
       <div className="title"><h2>5422</h2></div> 
       <div className="tinyicon">
       <p className="tinypara">VALID <br/>THRU</p>
       </div>
       <div className="interline">
       <p className="tinypara s">MONTH/YEAR</p>
       <h2>{this.state.cardth}</h2> 
       </div>
</div>
    <h3>{this.state.cardhl}</h3>
      </div>
      <div className="secondpart">
      <img id="secondimage" src={ii} alt="" /></div>
      </div>
    
      </div> 
      <div className="inputstyle">
      <label>Card number </label><input type="text" name="cardnb" maxlength="19" onChange= {this.ChangeCardNumber} /><br/>

      <label>Card holder </label><input type="text" name="cardhl" maxlength="20" onChange= {this.ChangeCardName}/><br/>
      <label>Valid thru </label><input type="text" name="cardth" maxlength="4" onChange= {this.ChangeCardDate}/><br/>
      <p className="warningstyle">{this.state.msg}</p>
      </div>
      </div>
    );
  }
}

export default Card;