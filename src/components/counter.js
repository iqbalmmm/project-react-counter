import React from "react"; 

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value : 0};
        this.buttonClicked = this.buttonClicked.bind(this);
        this.buttonSubClicked = this.buttonSubClicked.bind(this);
    }
    buttonClicked(event) {
        this.setState({value: this.state.value + 1})
    }
    buttonSubClicked(event) {
        if (this.state.value === 0) {
            alert("Already 0")
        } else {
            this.setState ({ value: this.state.value - 1});
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.value}</div>
                <button onClick = {this.buttonClicked}>Add</button>
                <button className="minusButton" onClick = {this.buttonSubClicked}>Minus</button>
            </div>
        );
    }
    
}

export default Counter;