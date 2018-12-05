import React, {Component} from 'react';
class NewTask extends Component {
    constructor(){
        super();
        this.state={
            userInput: ''
        }
        this.addToList = this.addToList.bind(this);
    }

    updateInput (value){
        this.setState({
            userInput: value
        })
    }  
    addToList (){
        this.props.add(this.state.userInput)
        this.setState({input: ''})
    }
    
     render() {
        return(
            <div>
            <input
                className="inputLine"
                onChange={event => this.updateInput(event.target.value)} 
            />                
            <button
                className="confirmationButton"
                onClick={this.addToList}>click</button>
            
            </div>
        )
    }
}
export default NewTask;