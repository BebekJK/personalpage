import react, {Component} from 'react';
import './About.css'
class About extends Component{
    render(){
        return(
            <div className='content' id='about'>
                {this.props.makeTitle("ABOUT ME")}
                <div className='innerContentContainer'>
                    <div className='innerContent' id='innerContentPhoto'></div>
                    <div className='innerContent' id='innerParagraph'>
                        <p align='justify'>Hello, I'm Kevin Jonathan Kusnomo, writing this page as an Information Engineering and Media (IEM) freshmen at Nanyang Technological University (NTU). I have expererienceed in competitive programming for 3 years. (And i love ducks)</p>
                        <p align='left' id='skills'>Skills</p>              
                        <ul>
                           
                            <li>Programming: HTML, CSS, JavaScript, C, C++</li>
                            <li>Language: Indonesian(native) , English</li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;