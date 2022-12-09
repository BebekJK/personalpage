import react, {Component} from 'react';
import './Project.css'
import background from './preview2048.png';
import background2 from './tvshow.png'
class Project extends Component{
    render(){
        return(
            <div className='content' id='project'>
                {this.props.makeTitle('MY PROJECTS')}
                <div id='projectContentContainer'>
                    <div>
                        <img className='projectPreview' src={background}></img>
                        <div className='projectName'>2048 Duplicate (Desktop Only)</div>
                        <div>
                            <button className='projectLinkContainer'>
                                <a className='projectLink' href='https://bebekjk.github.io/2048/'>View Project</a>
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <img className='projectPreview' src={background2}></img>
                        <div className='projectName'>Tv Show Search</div>
                        <div>
                            <button className='projectLinkContainer'>
                                <a className='projectLink' href='https://bebekjk.github.io/TvShow'>View Project</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;