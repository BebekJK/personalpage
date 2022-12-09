import react, { Component } from "react";

class LinkButton extends Component{
    render(){
      const {buttonType} = this.props;
      const data = buttonType.map((value , index) => {
        const link = `#${value.name.toLowerCase()}`;
        return <div key={index} className='buttonContainer'><a href={link}><button id={value.name} className='button'>{value.name}</button></a></div>
      })
      return(
        <div>
          {data}
          <br></br>
          <br></br>
          <br></br>
        </div>
      )
    }
  }

export default LinkButton;