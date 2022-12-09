import react, {Component} from 'react';



class Row extends Component{
    render(){
        const {gridSize , isMyTurn} = this.props;
        let data = [];
        for(let i=0;i<gridSize;i++){
            data = [...data , <div></div>]
        }
        console.log(data);
        return (
            <div>
                {data}
            </div>
        )
    }
}

export default Row;