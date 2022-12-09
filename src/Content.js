import react, { Component } from 'react';
import './Content.css'
import About from './About.js'
import Achievement from './Achievement.js';
import Experience from './Experience.js';
import Project from './Project.js'
class Content extends Component{


    makeTitle = (str) => {
        return <h2>{str}</h2>
    }

    
    render(){
        const {buttonType} = this.props;
        return(
            <div id='contentContainer'>
                <About makeTitle={this.makeTitle}/>
                <Achievement makeTitle={this.makeTitle}/>
                <Experience makeTitle={this.makeTitle}/>
                <Project makeTitle={this.makeTitle}/>
            </div>
        )
    }
}

export default Content;