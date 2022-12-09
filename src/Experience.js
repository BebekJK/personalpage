import react, {Component} from 'react'
import './Experience.css'
import background from './logo-pintu.png'


class Experience extends Component{
    constructor(props){
        super(props);
        this.state = {
            myExperience: [
                {
                    name: "Technology Subcommittee Member",
                    issuer: "PINTU (Pelajar Indonesia NTU)",
                    date: "Oct 2022 - Present",
                    place: "Singapore",
                    description: "Learnt HTML, CSS, GitHub",
                    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOgle_mddGqQQ20KtHz0wNwDveT5q48ML-KiBxWoJszw&s"
                },

                {
                    name: "Student Development Subcomitee Member",
                    issuer: "NTU Electrical and Electronic Engineering Club",
                    date: "Oct 2022 - Present",
                    place: "Singapore", 
                    description: "Made mathematics and physics module summary to prepare EEE students better for the final exam",
                    logo: "https://scontent.fcgk29-1.fna.fbcdn.net/v/t39.30808-6/304878687_504069228388001_2565105899953780926_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGDCHAGFwz4b-43mV2MeZe5rQ-1AASHGqatD7UABIcapnaEPUlmXtdxpMJACN1MlLHu-p1Xm_AerntypNDxHH9Q&_nc_ohc=NayX3UssxlsAX-EfAKU&_nc_ht=scontent.fcgk29-1.fna&oh=00_AfD5a4vI4nRvTnW_iKX5C-tpQY3SRMv_FO0x57sDylkjXQ&oe=63981A15",

                }
            ]
        }
    }
    createList = (experience) => {
        return(
            <li className='experienceItem'>
                <div className='experienceName'>
                    {experience.name}
                    <div className='experienceLogo' style={{ backgroundImage: `url(${(experience.logo)}`}}></div>
                </div>
                <div className='experienceIssue'>{experience.issue}</div>
                <div className='experienceDate'>{experience.date}</div>
                <div className='experiencePlace'>{experience.place}</div>
                <div className='experienceDescription'>{experience.description}</div>
            </li>
        )
    }
    render(){
        const {myExperience} = this.state;
        const data = myExperience.map((value , index) => {
            return this.createList(value);
        })
        // console.log(background);
        return(
            <div className='content' id='experience'>
                {this.props.makeTitle('MY EXPERIENCES')}
                <div id='experienceContentContainer'>
                    <ul>
                        {data}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Experience;