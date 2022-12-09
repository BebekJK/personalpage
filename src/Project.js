import react, {Component} from 'react';
import './Project.css'

class Project extends Component{
    render(){
        return(
            <div className='content' id='project'>
                {this.props.makeTitle('MY PROJECTS')}
                <div id='projectContentContainer'>
                    <div>
                        <iframe src='https://bebekjk.github.io/2048'></iframe>
                        <div>2048 Duplicate</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Project;