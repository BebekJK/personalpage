import react, { Component } from 'react'
import './Achievement.css'
class Achievement extends Component{
    constructor(props){
        super(props);
        this.state = {
            myAchievement: [
                {
                    name: "ASEAN Scholarship",
                    issuer: "Nanyang Technological University",
                    date: "Aug 2022",
                    description: "",
                },

                {
                    name: "Pelatnas IOI",
                    issuer: "Tim Olimpiade Komputer Indonesia (TOKI)",
                    date: "Dec 2021",
                    description: "Learned advanced competitive programming techniques, such as advanced data structure, dynamic programming, optimization",
                },

                {
                    name: "Bronze Medal, Bina Nusantara Programming for High School Competition (BNPCHS)",
                    issuer: "Bina Nusantara University",
                    date: "Oct 2021",
                    description: "",
                },

                {
                    name: "First Winner, IMPACT 2.0",
                    issuer: "Bandung Institute of Technology (ITB)",
                    date: "Jul 2021",
                    description: "IMPACT 2.0 is a national Mathematics, Physics, and Programming team competition.",
                },

                {
                    name: "Third Winner, LOGIKA UI 2020",
                    issuer: "University of Indonesia (UI)",
                    date: "Jan 2020",
                    description: "LOGIKA UI 2020 is a national mathematics team compeition.",
                },

                {
                    name: "Bronze Medal, Olimpiade Sains Nasional (OSN) for Senior High School in Informatics",
                    issuer: "Ministry of Education and Culture Republic of Indonesia",
                    date: "Jul 2019",
                    description: "Competing against senior high school students all around Indonesia, I achieved a bronze medal when i was still in 9th grade.",
                },

                {
                    name: "Bronze Medal, Olimpiade Sains Nasional (OSN) for Junior High School in Mathematics",
                    issuer: "Ministry of Education and Culture Republic of Indonesia",
                    date: "Jul 2019",
                    description: "",
                },
            ],
        }
    }
    createList = (Achievement) => {
        return(
            <li className='achievementItem'>
                <div className='achievementName' align='justify'>{Achievement.name}</div>
                <div className='achievementIssue' align='justify'>Issued by {Achievement.issuer}, {Achievement.date}</div>
                <div className='achievementDescription' align='justify'>{Achievement.description}</div>
            </li>
        )
    }
    render(){
        const {myAchievement} = this.state;
        
        const data = myAchievement.map((value , index) => {
            return this.createList(value);
        })
        return(
            <div className='content' id='achievement'>
                {this.props.makeTitle("MY ACHIEVEMENTS")}
                <div id='achievementContentContainer'>
                    <ul>
                        {data}
                    </ul>
                </div>
            </div>
               
        )
    }
}

export default Achievement;