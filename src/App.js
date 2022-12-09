import react, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './Photo.js';
import LinkButton from './LinkButton.js';
import Contact from './Contact.js'
import Content from './Content.js';

class App extends Component{
  constructor(){
    super();
    this.state = {
      buttonType: [
        {
          name: "Home"
        },
        {
          name: "About"
        },
        {
          name: "Achievement"
        },
        {
          name: "Experience"
        },
        {
          name: "Project"
        }
      ]
    }
  }


  render(){
    const {buttonType} = this.state;
    return(
      <div className='App'>
          <div className='temp'></div>
          <Photo />
          <Contact />
          <br></br>

          <div id='home'>
            <LinkButton buttonType={buttonType}/>
          </div>
          
          <Content buttonType={buttonType}/>
      </div>
    )
  }
}
export default App;
